export const setPersonalInfo = async () => {
  const response = await fetch("./src/data.json");
  const data = await response.json();

  //     if(!localStorage.getItem("personalInfo")) {

  //         localStorage.setItme("personalInfo", ...);
  //     }
  //
};
