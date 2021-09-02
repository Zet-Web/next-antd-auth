import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import { columns, data } from "./data-table";
import { Image, Result, Button, Descriptions, Table, Tag, Space } from "antd";

import { userService } from "services";

export default Home;

function Home() {
  const [users, setUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  const columns = [
    {
      title: "№ ",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Имя устройства",
      dataIndex: "nameDevice",
      key: "nameDevice",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Тип устройства",
      dataIndex: "typeDevice",
      key: "typeDevice",
    },
    {
      title: "Время активности",
      dataIndex: "sessionTime",
      key: "sessionTime",
    },
  ];

  const data = [
    {
      key: "1",
      nameDevice: "Iphone 10 SE",
      typeDevice: "Phone",
      sessionTime: "12.21 - 14.11 (Июль 28, 2021)",
    },
    {
      key: "2",
      nameDevice: "Samsung A6",
      typeDevice: "Phone",
      sessionTime: "20.21 - 22.15 (Август 1, 2021)",
    },
    {
      key: "3",
      nameDevice: "Windows PK",
      typeDevice: "PC",
      sessionTime: "03.21 - 07.15 (Август 3, 2021)",
    },
    {
      key: "4",
      nameDevice: "Windows PK",
      typeDevice: "PC",
      sessionTime: "10.02 - 14.44 (Август 11, 2021)",
    },
    {
      key: "5",
      nameDevice: "Samsung Note",
      typeDevice: "Tab",
      sessionTime: "20.21 - 01.15 (Август 16, 2021)",
    },
  ];

  return (
    <div className="card mt-4">
      <Result
        status="success"
        title="Вы успешно авторизовались"
        subTitle="Имя пользователя : User"
        extra={[
          <Button type="primary" key="console">
            Редактировать личный профиль
          </Button>,
        ]}
      />
      <div className="card-body">
        <div className="image-profile">
          <Image
            preview={{ visible: false }}
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            onClick={() => setVisible(true)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
            </Image.PreviewGroup>
          </div>
        </div>
        {!users && <div className="spinner-border spinner-border-sm"></div>}

        <Descriptions title="Информация о пользователе">
          <Descriptions.Item label="UserName">
            {users && (
              <div>
                {users.map((user) => (
                  <span key={user.id}>
                    {user.firstName} {user.lastName}
                  </span>
                ))}
              </div>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Имя">Лиза</Descriptions.Item>
          <Descriptions.Item label="Фамилия">Иванова</Descriptions.Item>
          <Descriptions.Item label="Email">lisa@gmail.com</Descriptions.Item>
          <Descriptions.Item label="Страна">Россия</Descriptions.Item>

          <Descriptions.Item label="Дата рождения">
            09.07.1993
          </Descriptions.Item>
        </Descriptions>

        <div className="list_sessions">
          <div className="ant-descriptions-title">История сессий</div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}
