export default function CardComment({ avatar, name, date, comment }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col min-h-[200px]">
      <div className="flex items-center">
        <img src={avatar} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
      <p className="text-gray-800 mt-4">{comment}</p>
    </div>
  );
}
