const SUPABASE_URL = 'https://pigtnwlptsbwyklfifor.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZ3Rud2xwdHNid3lrbGZpZm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzAyMDIsImV4cCI6MjA2OTAwNjIwMn0.eL2gV1cuskDYKL8ngdqLHM3El4SOgq8e4X6L1npbNEs';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const { data, error } = await supabaseClient.auth.signUp({ email, password });

  const msg = document.getElementById('signup-message');
  if (error) {
    msg.style.color = 'red';
    msg.textContent = error.message;
  } else {
    msg.style.color = 'green';
    msg.textContent = 'Signup successful! Check your email to verify.';
  }
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

  const msg = document.getElementById('login-message');
  if (error) {
    msg.style.color = 'red';
    msg.textContent = error.message;
  } else {
    msg.style.color = 'green';
    msg.textContent = 'Login successful!';
    // Optionally: window.location.href = 'dashboard.html';
  }
}
