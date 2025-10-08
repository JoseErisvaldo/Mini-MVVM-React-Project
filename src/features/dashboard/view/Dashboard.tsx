export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded">Overview card</div>
      <div className="bg-gray-800 p-4 rounded">Recent orders</div>
      <div className="bg-gray-800 p-4 rounded">Quick actions</div>
    </div>
  );
};
