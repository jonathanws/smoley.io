import './contact-form.scss'

import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

const { TextArea } = Input

const ContactForm = () => {
	const onFinish = (values: any) => console.log('on finish', values)
	const onFinishFailed = (values: any) => console.log('on finish failed', values)

	const rules = {
		email: [{ required: true, message: 'Email is required' }],
		message: [{ required: true, message: 'Give me something to read!' }],
		name: [{ required: true, message: 'Name is required' }],
	}

	return (
		<Form className="contact-form" name="contact" initialValues={{ remember: true }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
			<Form.Item label="Name" name="Name" rules={rules.name}>
				<Input />
			</Form.Item>

			<Row gutter={24}>
				<Col xs={24} md={12}>
					<Form.Item label="Email" name="email" rules={rules.email}>
						<Input />
					</Form.Item>
				</Col>
				<Col xs={24} md={12}>
					<Form.Item label="Phone Number" name="phone">
						<Input />
					</Form.Item>
				</Col>
			</Row>

			<Form.Item label="Message" name="message" rules={rules.message}>
				<TextArea rows={4} />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ContactForm
