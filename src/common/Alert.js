const Alert = ({ type, message }) => {
  const alertStyles = {
    success:
      "bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 absolute",
    error:
      "bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100",
  };

  const iconStyles = {
    success: "text-green-600",
    error: "text-red-600",
  };

  return (
    <div
      role="alert"
      className={`w-48 absolute top-4 z-30 right-4 ${alertStyles[type]} p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:transform hover:scale-105`}
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className={`h-5 w-5 flex-shrink-0 mr-2 ${iconStyles[type]}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
      <p className="text-xs font-semibold">{message}</p>
    </div>
  );
};

export default Alert;
