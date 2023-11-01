export const dateFormat = (dateString) => {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //months start at 0
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "/" + mm + "/" + yyyy;
  };
  
  export const slice_name = (curr_name, typeName) => {
    if (curr_name.indexOf("-") !== -1) {
      typeName == "first" //slicing according to first or last name
        ? (curr_name = curr_name.slice(curr_name.indexOf("-") + 1))
        : (curr_name = curr_name.slice(0, curr_name.indexOf("-")));
    }
    return curr_name
  };
  
  //possible to use alternatively date-fns package for formatting
  