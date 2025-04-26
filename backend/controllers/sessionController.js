// backend/controllers/sessionController.js
import supabase from '../config/supabaseClient.js';

// Function to create a session
export const createSession = async (req, res) => {
  const { created_by, partner_id, title, scheduled_at } = req.body;

  try {
    const { data, error } = await supabase
      .from('sessions')
      .insert([{ created_by, partner_id, title, scheduled_at }])
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to update session completion time
export const updateSessionCompletion = async (req, res) => {
  const { session_id } = req.params;
  const { completed_at } = req.body;

  try {
    const { data, error } = await supabase
      .from('sessions')
      .update({ completed_at })
      .eq('id', session_id)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
