import { Button, Form, Input } from 'antd';
import React from 'react';

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
		<Form name="contact" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
			<Form.Item label="Name" name="Name" rules={rules.name}>
				<Input />
			</Form.Item>

			<Form.Item label="Phone Number" name="phone">
				<Input />
			</Form.Item>

			<Form.Item label="Email" name="email" rules={rules.email}>
				<Input />
			</Form.Item>

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
