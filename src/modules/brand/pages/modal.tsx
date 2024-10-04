import { Button, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import { BrandType } from "../types";
import { ModalPropType } from "@types";
import { Upload } from "@components";
import { useCategory } from "../../category/hooks/queries";
import { useCreateBrand, useUpdateBrand } from "../hooks/mutations";
const { Option } = Select;
const Index = ({ open, handleCancel, update }: ModalPropType) => {
  const [file, setFile] = useState<any>(null);
  const [form] = useForm();
  const { categories } = useCategory({})?.data || {};
  const { mutate: createMutate, isPending: isCreating } = useCreateBrand();
  const { mutate: updateMutate, isPending: isUpdating } = useUpdateBrand();
  useEffect(() => {
    if (open) {
      if (update) {
        form.setFieldsValue({
          name: update.name,
          description: update.description,
          category_id: update.category_id
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, update, form]);
  const handleSubmit = (values: BrandType) => {
    const selectedFile = file?.originFileObj || file;
    if (!selectedFile) {
      form.setFields([
        {
          name: "file",
          errors: ["Please upload a file"],
        },
      ]);
      return;
    }
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    if(values.category_id){
      formData.append("category_id", values.category_id);
    }
    formData.append("file", selectedFile);
    if (update) {
      const payload = {...values, id: update.id, categoryId: values.category_id};
      updateMutate(payload, {
        onSuccess: () => {
          handleCancel();
        },
      });
    } else {
      createMutate(formData, {
        onSuccess: () => {
          handleCancel();
        },
      });
    }
  };

  return (
    <>
      <Modal
        open={open}
        title={update ? "Edit category" : "Create category"}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          name="categoryForm"
          style={{ width: "100%", marginTop: "20px" }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          {
            !update && <Form.Item
            label="Brand logo"
            name="file" // you need this key for validation
            rules={[
              {
                required: true,
                validator: () =>
                  file
                    ? Promise.resolve()
                    : Promise.reject("Please upload a file"),
              },
            ]}
          >
            <Upload setFile={setFile} />
          </Form.Item>
          }
          <Form.Item
            label="Select category"
            name="category_id"
            rules={[{ required: false, message: "Select a category" }]}
          >
            <Select placeholder="Select a category" size="large">
              {categories?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Brand name"
            name="name"
            rules={[{ required: true, message: "Enter category name" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Enter description" }]}
          >
            <TextArea size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              loading={isCreating || isUpdating}
            >
              {update ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Index;
