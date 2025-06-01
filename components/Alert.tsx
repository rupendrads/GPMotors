export type alertProps = {
  message: string;
  type: string;
  onClose: () => void;
};

const Alert = (props: alertProps | null) => {
  const alertStyles = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  };

  const style =
    alertStyles.success ||
    alertStyles.error ||
    alertStyles.warning ||
    alertStyles.info;

  {
    if (props === null) return <div></div>;
  }

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="p-6 rounded shadow-lg w-full max-w-md text-center">
        <div
          className={`border rounded-md p-4 mb-4 ${style} relative z-50`}
          role="alert"
        >
          <strong className="font-bold">
            {props.type.charAt(0).toUpperCase() + props.type.slice(1)}:
          </strong>
          <span className="block sm:inline ml-2">{props.message}</span>
          <button
            onClick={props.onClose}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
