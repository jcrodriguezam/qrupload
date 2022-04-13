
const uploadDocuments = async (files) => {
  const filePromises = files.map((file) => {
    // Return a promise per file
const { data } = file;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          var rawLog = reader.result.split(',')[1]; //extract only thee file data part
          var dataSend = { dataReq: { data: rawLog, name: data.name, type: data.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
          const response = await fetch('https://script.google.com/macros/s/AKfycbyMEoYK1XSefZRRBobOFQFuu2eJ5KTV7a9vDCsFDMXYP6CQ1ztKmYANju6x-_zR5AtyLQ/exec',
            { method: "POST",
              redirect: "follow",
              mode: 'no-cors',
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            body: JSON.stringify(dataSend),
          })
          // Resolve the promise with the response value
          resolve(response);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file.data);
    });
  });

  // Wait for all promises to be resolved
  const fileInfos = await Promise.all(filePromises);

  // Profit
  // return fileInfos;
  return true;
};




export default {
  state: {},
  reducers: { },
  effects: (dispatch) => ({
    async uploadToGDrive(payload, state) {
      const {files} = payload;
      const res = await uploadDocuments(files);
      return res;
    },
  })
};
