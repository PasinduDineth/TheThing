// backend/controllers/profileController.js
import supabase from '../config/supabaseClient.js';

// Function to get user profile
export const getProfile = async (req, res) => {
  const userId = req.params.id; // Get the user ID from the request
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to update user profile
export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { full_name, email, photo_url, partner_id, invitation_code, is_active } = req.body;

  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        id,
        full_name,
        email,
        photo_url,
        partner_id,
        invitation_code,
        is_active
      })
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
