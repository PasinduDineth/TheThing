// backend/controllers/profileController.js
import supabase from '../config/supabaseClient.js';

// Function to get user profile
export const getUser = async (req, res) => {
  const userId = req.params.id; // Get the user ID from the request
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const connectPartner = async (req, res) => {
  const user_id = req.user.sub; // from JWT
  const { partner_email, connect_code } = req.body;

  try {
    // Step 1: Look up the partner using email and connect_code
    const { data: partner, error } = await supabase
      .from('users') // Ensure RLS allows access to this table
      .select('id')
      .eq('email', partner_email)
      .eq('connectcode', connect_code)
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    const partner_id = partner.id;

    // Step 2: Update current user's partner_id
    const { error: updateUserError } = await supabase
      .from('users')
      .update({ partner_id })
      .eq('id', user_id);

    if (updateUserError) throw updateUserError;

    // Step 3: Update partner's partner_id to the current user_id
    const { error: updatePartnerError } = await supabase
      .from('users')
      .update({ partner_id: user_id })
      .eq('id', partner_id);

    if (updatePartnerError) throw updatePartnerError;

    res.status(200).json({ message: 'Partner connected successfully', partner_id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
