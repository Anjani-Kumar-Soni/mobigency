import React, { useState } from "react";

const Form4 = ({ data, handleChange, setData, decrement }) => {
  const [isFamilyDia, setIsFamilyDia] = useState(false);
  const [diaMembers, setDiaMembers] = useState([]);
  const [currMember, setCurrMember] = useState("");
  const [hasAllergy, setHasAllergy] = useState(false);
  const [allergies, setAllergies] = useState([]);
  const [currAllergy, setCurrAllergy] = useState("");
  const [bloodDon, setBloodDon] = useState(false);
  const [currBloodDon, setCurrBloodDon] = useState({
    bankName: "",
    bankAdd: "",
  });
  const [allDonations, setAllDonations] = useState([]);
  const [hasCanc, setHasCanc] = useState(false);
  const [currMemberCanc, setCurrMemberCanc] = useState("");
  const [allMembCanc, setAllMembCanc] = useState([]);
  const [operated, setOperated] = useState(false);
  const [currOrgan, setCurrOrgan] = useState("");
  const [organs, setOrgans] = useState([]);
  const [medicated, setMedicated] = useState(false);
  const [currMed, setCurrMed] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [vacc, setVacc] = useState(false);
  const [hasTB, setHasTB] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    // console.log(res)
    if (res.status == 200) {
      // console.log(res.message);
      sessionStorage.setItem("email", data.email);
      toast.success(res.message);
      router.push("/Home");
    } else {
      // console.error(res.message);
      toast.error(res.message);
    }
  };

  return (
    <div>
      <form>
        <div className="px-4">
          <h3 className="text-center font-bold">General Details</h3>
          <div className="mb-4">
            <label
              htmlFor="bloodGroup"
              className="leading-7 text-sm text-gray-600"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              placeholder="Enter your Blood Group(e.g. B+)"
              value={data.bloodGroup}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bloodPressure"
              className="leading-7 text-sm text-gray-600"
            >
              Blood Pressure
            </label>
            <select
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="bloodPressure"
              value={data.bloodPressure}
              onChange={(e) =>
                setData({ ...data, bloodPressure: e.target.value })
              }
            >
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="heamoglobin"
              className="leading-7 text-sm text-gray-600"
            >
              Haemoglobin
            </label>
            <input
              type="text"
              id="haemoglobin"
              name="haemoglobin"
              placeholder="Enter your Haemoglobin count"
              value={data.haemoglobin}
              onChange={handleChange}
              min={0}
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="familyDiabetic"
              className="leading-7 text-sm text-gray-600"
            >
              Is anyone diabetic in your family?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="hs-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-radio-group-1"
                  defaultChecked
                  onClick={() => {
                    setIsFamilyDia(false);
                    setDiaMembers([]);
                  }}
                  disabled={diaMembers.length > 0}
                />
                <label
                  htmlFor="hs-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="hs-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-radio-group-2"
                  onClick={() => setIsFamilyDia(true)}
                />
                <label
                  htmlFor="hs-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {isFamilyDia && (
              <div className="mt-2">
                <label
                  htmlFor="diaName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Relation
                </label>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    id="diaName"
                    name="diaName"
                    placeholder="e.g. Father"
                    value={currMember}
                    onChange={(e) => setCurrMember(e.target.value)}
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {currMember != "" ? (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setDiaMembers([...diaMembers, currMember]);
                        setData({
                          ...data,
                          familyDiabetic: [...data.familyDiabetic, currMember],
                        });
                        // add currMember to familyDiabetic array
                        setCurrMember("");
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="allergetic"
              className="leading-7 text-sm text-gray-600"
            >
              Do you have any allergy?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="al-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="al-radio-group-1"
                  defaultChecked
                  onClick={() => {
                    setHasAllergy(false);
                    setAllergies([]);
                  }}
                  disabled={allergies.length > 0}
                />
                <label
                  htmlFor="al-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="al-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="al-radio-group-2"
                  onClick={() => setHasAllergy(true)}
                />
                <label
                  htmlFor="al-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {hasAllergy && (
              <div className="mt-2">
                <label
                  htmlFor="allergyName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Allergy Name
                </label>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    id="allergyName"
                    name="allergyName"
                    value={currAllergy}
                    onChange={(e) => setCurrAllergy(e.target.value)}
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {currAllergy != "" ? (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setAllergies([...allergies, currAllergy]);
                        setData({
                          ...data,
                          allergy: [...data.allergy, currAllergy],
                        });
                        setCurrAllergy("");
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="bloodDonated"
              className="leading-7 text-sm text-gray-600"
            >
              Have you ever donated blood?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="bd-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="bd-radio-group-1"
                  defaultChecked
                  disabled={allDonations.length > 0}
                  onClick={() => {
                    setBloodDon(false);
                    setAllDonations([]);
                  }}
                />
                <label
                  htmlFor="bd-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="bd-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="bd-radio-group-2"
                  onClick={() => setBloodDon(true)}
                />
                <label
                  htmlFor="bd-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {bloodDon && (
              <div className="mt-2">
                <h4 className="font-bold text-center">Blood Bank details</h4>
                <div>
                  <label
                    htmlFor="bankName"
                    className="leading-7 text-sm text-gray-600 p-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={currBloodDon.bankName}
                    onChange={(e) =>
                      setCurrBloodDon({
                        ...currBloodDon,
                        bankName: e.target.value,
                      })
                    }
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bankAdd"
                    className="leading-7 text-sm text-gray-600 p-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="bankAdd"
                    name="bankAdd"
                    value={currBloodDon.bankAdd}
                    onChange={(e) =>
                      setCurrBloodDon({
                        ...currBloodDon,
                        bankAdd: e.target.value,
                      })
                    }
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="flex justify-center">
                  {currBloodDon.bankName == "" || currBloodDon.bankAdd == "" ? (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-400 mt-2 h-auto text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 mt-2 h-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        setAllDonations([...allDonations, currBloodDon]);
                        setData({
                          ...data,
                          bloodDonated: [...data.bloodDonated, currBloodDon],
                        });
                        setCurrBloodDon({ bankName: "", bankAdd: "" });
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="familyCancer"
              className="leading-7 text-sm text-gray-600"
            >
              Does anyone in your family has cancer?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="fc-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="fc-radio-group-1"
                  defaultChecked
                  disabled={allMembCanc.length > 0}
                  onClick={() => {
                    setHasCanc(false);
                    setAllMembCanc([]);
                  }}
                />
                <label
                  htmlFor="fc-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="fc-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="fc-radio-group-2"
                  onClick={() => setHasCanc(true)}
                />
                <label
                  htmlFor="fc-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {hasCanc && (
              <div className="mt-2">
                <label
                  htmlFor="cancMemb"
                  className="leading-7 text-sm text-gray-600"
                >
                  Relation
                </label>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    id="cancMemb"
                    name="cancMemb"
                    placeholder="e.g. Father"
                    value={currMemberCanc}
                    onChange={(e) => setCurrMemberCanc(e.target.value)}
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {currMemberCanc != "" ? (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setAllMembCanc([...allMembCanc, currMemberCanc]);
                        setData({
                          ...data,
                          familyCancer: [...data.familyCancer, currMemberCanc],
                        });
                        // add currMember to familyDiabetic array
                        setCurrMemberCanc("");
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="familyCancer"
              className="leading-7 text-sm text-gray-600"
            >
              Were you ever operated?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="op-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="op-radio-group-1"
                  defaultChecked
                  disabled={allMembCanc.length > 0}
                  onClick={() => {
                    setHasCanc(false);
                    setOrgans([]);
                  }}
                />
                <label
                  htmlFor="op-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="op-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="op-radio-group-2"
                  onClick={() => setOperated(true)}
                />
                <label
                  htmlFor="op-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {operated && (
              <div className="mt-2">
                <label
                  htmlFor="orgName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Organ Name
                </label>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    id="orgName"
                    name="orgName"
                    placeholder="e.g. Stomach"
                    value={currOrgan}
                    onChange={(e) => setCurrOrgan(e.target.value)}
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {currOrgan != "" ? (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setOrgans([...organs, currOrgan]);
                        setData({
                          ...data,
                          operated: [...data.operated, currOrgan],
                        });
                        // add currMember to familyDiabetic array
                        setCurrOrgan("");
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="medicated"
              className="leading-7 text-sm text-gray-600"
            >
              Are you taking medicines?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="med-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="med-radio-group-1"
                  defaultChecked
                  disabled={allMembCanc.length > 0}
                  onClick={() => {
                    setMedicated(false);
                    setMedicines([]);
                  }}
                />
                <label
                  htmlFor="med-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="med-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="med-radio-group-2"
                  onClick={() => setMedicated(true)}
                />
                <label
                  htmlFor="med-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {medicated && (
              <div className="mt-2">
                <label
                  htmlFor="medName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Medicine Name
                </label>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    id="medName"
                    name="medName"
                    placeholder="e.g. Stomach"
                    value={currMed}
                    onChange={(e) => setCurrMed(e.target.value)}
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {currMed != "" ? (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
                      onClick={(e) => {
                        e.preventDefault();
                        setMedicines([...medicines, currMed]);
                        setData({
                          ...data,
                          medication: {
                            ...data.medication,
                            medName: [...data.medication.medName, currMed],
                          },
                        });
                        // add currMember to familyDiabetic array
                        setCurrMed("");
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-[20%] bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="vaccinated"
              className="leading-7 text-sm text-gray-600"
            >
              Are you corona vaccinated?
            </label>
            <div className="flex gap-x-6">
              <div className="flex">
                <input
                  type="radio"
                  name="vac-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="vac-radio-group-1"
                  defaultChecked
                  disabled={data.medication.vaccName.length > 0}
                  onClick={() => {
                    setVacc(false);
                  }}
                />
                <label
                  htmlFor="vac-radio-group-1"
                  className="text-sm text-gray-500 ms-2"
                >
                  No
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="vac-radio-group"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="vac-radio-group-2"
                  onClick={() => setVacc(true)}
                />
                <label
                  htmlFor="vac-radio-group-2"
                  className="text-sm text-gray-500 ms-2"
                >
                  Yes
                </label>
              </div>
            </div>
            {vacc && (
              <div className="mt-2">
                <label
                  htmlFor="vaccName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Vaccine Name
                </label>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    id="vaccName"
                    name="vaccName"
                    placeholder="e.g. Covishield"
                    value={data.medication.vaccName}
                    onChange={(e) =>
                      setData({
                        ...data,
                        medication: {
                          ...data.medication,
                          vaccName: e.target.value,
                        },
                      })
                    }
                    className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-center">Problems</h3>
            <div className="mb-4">
              <label htmlFor="tb" className="leading-7 text-sm text-gray-600">
                Do you have TB?
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="tb-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="tb-radio-group-1"
                    defaultChecked
                    disabled={data.problems.TB.organName.length > 0}
                    onClick={() => {
                      setHasTB(false);
                    }}
                  />
                  <label
                    htmlFor="tb-radio-group-1"
                    className="text-sm text-gray-500 ms-2"
                  >
                    No
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="tb-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="tb-radio-group-2"
                    onClick={() => setHasTB(true)}
                  />
                  <label
                    htmlFor="tb-radio-group-2"
                    className="text-sm text-gray-500 ms-2"
                  >
                    Yes
                  </label>
                </div>
              </div>
              {hasTB && (
                <div className="mt-2">
                  <label
                    htmlFor="organName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Organ Name
                  </label>
                  <div className="flex gap-2 w-full">
                    <input
                      type="text"
                      id="organName"
                      name="organName"
                      placeholder="e.g. Bone"
                      value={data.problems.TB.organName}
                      onChange={(e) =>
                        setData({
                          ...data,
                          problems: {
                            ...data.problems,
                            TB: { organName: e.target.value },
                          },
                        })
                      }
                      className="w-auto border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="tp" className="leading-7 text-sm text-gray-600">
                Do you have Typhoid?
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="tp-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="tp-radio-group-1"
                    defaultChecked
                    onClick={(e) => {
                      setData({
                        ...data,
                        problems: {
                          ...data.problems,
                          hasTyphoid: false,
                        },
                      });
                    }}
                  />
                  <label
                    htmlFor="tp-radio-group-1"
                    className="text-sm text-gray-500 ms-2"
                  >
                    No
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="tp-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="tp-radio-group-2"
                    onClick={(e) => {
                      setData({
                        ...data,
                        problems: {
                          ...data.problems,
                          hasTyphoid: true,
                        },
                      });
                    }}
                  />
                  <label
                    htmlFor="tp-radio-group-2"
                    className="text-sm text-gray-500 ms-2"
                  >
                    Yes
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="inj" className="leading-7 text-sm text-gray-600">
                Have you ever had a head injury?
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="inj-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="inj-radio-group-1"
                    defaultChecked
                    onClick={(e) => {
                      setData({
                        ...data,
                        problems: {
                          ...data.problems,
                          injury: [{ headInjury: false }],
                        },
                      });
                    }}
                  />
                  <label
                    htmlFor="inj-radio-group-1"
                    className="text-sm text-gray-500 ms-2"
                  >
                    No
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="inj-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="inj-radio-group-2"
                    onClick={(e) => {
                      setData({
                        ...data,
                        problems: {
                          ...data.problems,
                          injury: [{ headInjury: true }],
                        },
                      });
                    }}
                  />
                  <label
                    htmlFor="inj-radio-group-2"
                    className="text-sm text-gray-500 ms-2"
                  >
                    Yes
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="db" className="leading-7 text-sm text-gray-600">
                Are you suffering from Diabetes?
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="db-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="db-radio-group-1"
                    defaultChecked
                    onClick={(e) => {
                      setData({
                        ...data,
                        problems: {
                          ...data.problems,
                          diabetes: {
                            isDiabetic: false,
                          },
                        },
                      });
                    }}
                  />
                  <label
                    htmlFor="db-radio-group-1"
                    className="text-sm text-gray-500 ms-2"
                  >
                    No
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="db-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="db-radio-group-2"
                    onClick={(e) => {
                      setData({
                        ...data,
                        problems: {
                          ...data.problems,
                          diabetes: {
                            isDiabetic: true,
                          },
                        },
                      });
                    }}
                  />
                  <label
                    htmlFor="db-radio-group-2"
                    className="text-sm text-gray-500 ms-2"
                  >
                    Yes
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-auto mb-2 bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
          onClick={() => decrement()}
        >
          Previous
        </button>
        {data.email === "" ||
        data.password === "" ||
        data.userName === "" ||
        data.contact === "" ||
        data.homeAdd === "" ||
        data.dob === "" ||
        data.emergency.userName === "" ||
        data.emergency.contact === "" ||
        data.emergency.relation === "" ||
        data.bloodGroup === "" ? (
          <button
            type="button"
            className="w-full bg-blue-400 text-white font-bold py-2 px-4 rounded hover:cursor-default"
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        <div className="text-center text-sm text-blue-900">Page: 4 of 4</div>
      </form>
    </div>
  );
};

export default Form4;
