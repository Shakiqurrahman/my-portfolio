import { config } from "@/config/config";
interface IMessageData {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
const UserMessages = async () => {
  const data = await fetch(`${config.apiUrl}/messages`, {
    cache: "no-store",
  });
  const response = await data.json();

  const messages = response?.data;
  return (
    <section className="px-4 lg:px-10 my-16">
      <h1 className="text-2xl text-center font-semibold">User Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {messages?.map((message: IMessageData) => (
          <div
            key={message._id}
            className="bg-neutral-700 text-white p-5 rounded-lg"
          >
            <h3>Name : {message.name}</h3>
            <h3>Email : {message.email}</h3>
            <p>Message : {message.message}</p>
            <p className="text-sm font-medium text-blue-400">
              {new Date(message.createdAt).toLocaleString()}
            </p>
          </div>
        )) || <p>No messages found.</p>}
      </div>
    </section>
  );
};

export default UserMessages;
