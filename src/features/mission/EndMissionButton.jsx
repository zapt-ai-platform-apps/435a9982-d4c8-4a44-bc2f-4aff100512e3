export default function EndMissionButton({ onEnd }) {
  return (
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <button
        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 transition duration-300 rounded cursor-pointer"
        onClick={() => {
          console.log('Ending mission, returning to Home.');
          onEnd();
        }}
      >
        End Mission
      </button>
    </div>
  );
}