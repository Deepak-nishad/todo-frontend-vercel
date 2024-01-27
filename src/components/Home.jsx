import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://tryvercel-eight.vercel.app/api/v1/getTodos"
      );
      setData(response.data.data);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto ">
            <h1 className="text-center py-4  text-primary">Todo App</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item._id}>
                      <th scope="row">{item._id}</th>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <button className="btn btn-warning me-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
