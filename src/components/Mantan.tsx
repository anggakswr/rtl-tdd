import { useEffect, useState } from "react";
import axios from "axios";

type UserType = {
  id: number;
  name: string;
};

const API = () => {
  const [aUsers, setAUsers] = useState<[] | UserType[]>([]);

  useEffect(() => {
    const vGetUsers = async () => {
      try {
        const oRes = await axios.get("/users");
        // console.log("oRes.data", oRes.data);
        setAUsers(oRes.data);
      } catch {}
    };

    vGetUsers();
  }, []);

  return (
    <ul>
      {aUsers.map((oUser, nIndex) => (
        <li key={`user-${oUser.id}`}>
          Mantan {nIndex + 1}: {oUser.name}
        </li>
      ))}
    </ul>
  );
};

export default API;
