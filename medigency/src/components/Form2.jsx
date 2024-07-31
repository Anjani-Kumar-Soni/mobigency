import React from "react";

const Form2 = ({ data, setData, increment, decrement }) => {
  return (
    <div>
      <form>
        <div className="px-4">
          <div className="mb-4">
            <h3 className="text-center font-bold">Emergency Contact details</h3>
            <label
              htmlFor="emergency_name"
              className="leading-7 text-sm text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="emergency_name"
              name="emergency_name"
              placeholder="Enter emergency contact name"
              value={data.emergency.userName}
              required
              onChange={(e) => {
                setData({
                  ...data,
                  emergency: {
                    ...data.emergency,
                    userName: e.target.value,
                  },
                });
              }}
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="emergency_contact"
              className="leading-7 text-sm text-gray-600"
            >
              Contact
            </label>
            <input
              type="text"
              id="emergency_contact"
              name="emergency_contact"
              placeholder="Enter emergency contact number"
              required
              value={data.emergency.contact}
              onChange={(e) => {
                setData({
                  ...data,
                  emergency: {
                    ...data.emergency,
                    contact: e.target.value,
                  },
                });
              }}
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="emergency_relation"
              className="leading-7 text-sm text-gray-600"
            >
              Relation
            </label>
            <input
              type="text"
              id="emergency_relation"
              name="emergency_relation"
              placeholder="Your relation with emergency person(e.g. father)"
              value={data.emergency.relation}
              required
              onChange={(e) => {
                setData({
                  ...data,
                  emergency: {
                    ...data.emergency,
                    relation: e.target.value,
                  },
                });
              }}
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="w-auto bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
            onClick={() => decrement()}
          >
            Previous
          </button>
          {data.emergency.userName === "" ||
          data.emergency.contact === "" ||
          data.relation === "" ? (
            <button
              type="button"
              className="w-auto bg-blue-400 text-white font-bold py-2 px-4 rounded hover:cursor-default"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="w-auto bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
              onClick={() => increment()}
            >
              Next
            </button>
          )}
        </div>
        <div className="text-center text-sm text-blue-900">Page: 2 of 3</div>
      </form>
    </div>
  );
};

export default Form2;
