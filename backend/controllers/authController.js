import supabase from '../config/supabaseClient.js';
import crypto from 'crypto'; // For generating unique codes
function generateConnectCode() {
  const now = Date.now(); // milliseconds
  const random = Math.floor(Math.random() * 1000); // 0 to 999
  const code = (now + random).toString(36); // base36 encoding
  return code.slice(-6); // last 6 characters
}

// Register User
export const registerUser = async (req, res) => {
  const { email, password, full_name } = req.body;

  try {
    const connectCode = generateConnectCode();
    // @Todo: Check DB for the code before assign this to another new customer
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          connectcode: connectCode
        },
      },
    });

    if (error) throw error;

    res.status(201).json({ message: 'User registered successfully', connectCode, data });
  } catch (err) {
    console.log("err", err)
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
