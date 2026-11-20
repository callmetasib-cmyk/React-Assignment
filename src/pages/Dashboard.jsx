function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>Logged in as: {user.email}</p>
    </div>
  );
}

export default Dashboard;
