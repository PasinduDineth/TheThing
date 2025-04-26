// backend/controllers/questionController.js
import supabase from '../config/supabaseClient.js';

// Function to get all questions
export const getQuestions = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*');

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to add a new question
export const addQuestion = async (req, res) => {
  const { category_id, text, visibility } = req.body;

  try {
    const { data, error } = await supabase
      .from('questions')
      .insert([{ category_id, text, visibility }])
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
