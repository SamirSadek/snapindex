import { useMemo } from "react";

const UploadForm = ({ isVisible, onChange, onSubmit, inputs }) => {
  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some((input) => !input);
  }, [inputs]);
  return (
    isVisible && (
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>
        <div className="mb-5 flex items-center justify-center">
          {
            inputs.path &&
            <div
            className="rounded p-1 m-5"
            style={{
              width: "30%",
              height: "300px",
              backgroundImage: `url(${inputs.path}`,
              backgroundSize: "cover",
            }}
          ></div>
          }
          <form className="mb-2 text-center" onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                placeholder="Title"
                name="title"
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
                id="file_input"
                type="file"
                name="file"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-600 p-2 rounded text-white font-mono font-bold  disabled:bg-gray-300"
              disabled={isDisabled}
            >
              Save changes
            </button>
          </form>
        </div>
      </>
    )
  );
};

export default UploadForm;
