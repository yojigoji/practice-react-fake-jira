import { Input, Select } from "antd";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form>
      <Input
        type="text"
        value={param.name}
        onChange={(value: any) => {
          setParam({
            ...param,
            name: value,
          });
          console.log("param", param);
        }}
      />
      <Select
        onChange={(value) => {
          setParam({
            ...param,
            personId: value,
          });
        }}
      >
        <Select.option value={""}>负责人</Select.option>
        {users.map((user) => (
          <Select.option value={user.id} key={user.id}>
            {user.name}
          </Select.option>
        ))}
      </Select>
    </form>
  );
};
