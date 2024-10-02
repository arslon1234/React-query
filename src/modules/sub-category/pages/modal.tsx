import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { ModalPropType } from "@types";
import { useCreateSubCategory, useUpdateSubCategory } from "../hooks/mutations";
const Index = (props: ModalPropType) => {
  const { open, handleCancel, update, id } = props;

  const [form] = useForm();
  const { mutate: createMutate, isPending: isCreating } =
    useCreateSubCategory();
  const { mutate: updateMutate, isPending: isUpdating } =
    useUpdateSubCategory();
  useEffect(() => {
    if (open) {
      if (update) {
        form.setFieldsValue({
          name: update.name,
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, update, form]);

  const handleSubmit = (values: any) => {
    if (update) {
      const payload = {
        ...values,
        parent_category_id: Number(id),
        id: update.id,
      };
      updateMutate(payload, {
        onSuccess: () => {
          handleCancel();
        },
      });
    } else {
      const payload = { ...values, parent_category_id: Number(id) };
      createMutate(payload, {
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
        title={update ? "Edit sub-category" : "Create sub-category"}
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
          <Form.Item
            label="SubCategory name"
            name="name"
            rules={[{ required: true, message: "Enter sub-category name" }]}
          >
            <Input size="large" />
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
