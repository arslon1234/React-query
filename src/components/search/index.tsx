import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchProps {
  params: {
    search: string;
    page: number;
    limit: number;
  };
  setParams: (updater: (prevParams: any) => any) => void; 
}

const Index = (props: SearchProps) => {
  const { params, setParams } = props;
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value;

    setParams((prev) => ({
      ...prev,
      search: newSearchValue,
    }));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("search", newSearchValue); 
    navigate(`?${searchParams.toString()}`);
  };

  return <Input placeholder="Search..." value={params.search} onChange={handleChange} className="search-input"/>;
};

export default Index;
