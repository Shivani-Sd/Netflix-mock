import { FC } from "react";

const Testing: FC = () => {
  const onFileUpload = (files: FileList | null) => {
    let promiseList: Promise<unknown>[]=[];
    if (files) {
      const fileList = Array.from(files);
      fileList.forEach((f) => {
        let promise = new Promise((resolve, reject) => {
          if (f) resolve("uploaded");
          else reject("failed");
        });
        promiseList.push(promise);
      });
      Promise.allSettled(promiseList).then((result)=>{
        result.forEach((r,index)=>{
            console.log(`upload for image${index+1} has been ${r.status}`)
        })
      })
    }
  };

  return (
    <div>
      <input
        type="file"
        id="myfile"
        multiple
        onChange={(e) => onFileUpload(e.target.files)}
      />
    </div>
  );
};

export default Testing;
