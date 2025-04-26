// backend/controllers/profileController.js
import supabase from '../config/supabaseClient.js';

// Function to get user profile
export const getProfile = async (req, res) => {
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
  const user_id = req.user.sub;  // from JWT
  const { partner_email } = req.body;

  try {
    // Check if user with given email exists in `auth.users` table
    const { data: users, error } = await supabase
      .from('users')  // This works only if RLS allows it
      .select('id')
      .eq('email', partner_email)
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    if (!users) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    const partner_id = users.id;


    // Update the current user's profile with the partner_id
    const { error: updateError } = await supabase
      .from('users')
      .update({ partner_id })
      .eq('id', user_id);

    if (updateError) throw updateError;

    res.status(200).json({ message: 'Partner connected', partner_id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};