import supabase from '../config/supabaseClient.js';

export const registerUser = async (req, res) => {
  const { email, password, full_name } = req.body;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name
        }
      }
    });

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
