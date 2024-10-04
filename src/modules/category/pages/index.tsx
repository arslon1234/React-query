import { useEffect, useState } from "react";
import { Button, Space, Tooltip } from "antd";
import { EditOutlined,ArrowsAltOutlined } from "@ant-design/icons";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useCategory } from "../hooks/queries";
import { useDeleteCategory } from "../hooks/mutations";
import { Table, ConfirmDelete, Search } from "@components";
import { RecordType } from "../types";
import Modal from "./modal";
const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [update, setUpdate] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({
    search: "",
    page: 1,
    limit: 5,
  });
  const navigate = useNavigate()
  const { categories, count } = useCategory(params)?.data || {};
  const {mutate} = useDeleteCategory()
  useEffect(() => {
    const pageFromParams = searchParams.get("page") || "1";
    const limitFromParams = searchParams.get("limit") || "5";
    const searchFromParams = searchParams.get("search") || "";
    setParams((prev) => ({
      ...prev,
      page: Number(pageFromParams),
      limit: Number(limitFromParams),
      search: searchFromParams,
    }));
  }, [searchParams]);

  const handleTableChange = (pagination: any) => {
    const { current = 1, pageSize = 5 } = pagination;
    setParams((prev) => ({
      ...prev,
      page: current,
      limit: pageSize,
    }));
    setSearchParams({
      page: String(current),
      limit: String(pageSize),
    });
  };
  const editData = (data: any) => {
    setUpdate(data);
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
    setUpdate(null);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: RecordType) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <Button
              type="default"
              onClick={() => editData(record)}
              icon={<EditOutlined />}
            />
          </Tooltip>
          <ConfirmDelete id={record.id} deleteItem={(id:string | number)=>mutate(id)} />
          <Tooltip title="sub-category">
            <Button
              type="default"
              onClick={() => navigate(`/layout/category/${record.id}`)}
              icon={<ArrowsAltOutlined />}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Modal open={modalVisible} handleCancel={handleCancel} update={update} />
      <h1>Category</h1>
      <div className="pages">
        <Search params={params} setParams={setParams} />
        <Button type="primary" className="btn" onClick={() => setModalVisible(true)}>
          Add Category
        </Button>
      </div>
      <Table
        data={categories}
        columns={columns}
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: count,
          showSizeChanger: true,
          pageSizeOptions: ["2", "5", "7", "10", "12"],
        }}
        onChange={handleTableChange}
      />
    </>
  );
};

export default Index;
