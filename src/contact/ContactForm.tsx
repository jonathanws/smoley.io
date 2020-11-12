import './contact-form.scss';

import { Button, Col, Form, Input, Row, Tag } from 'antd';
import React, { useState } from 'react';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { TextArea } = Input

const ContactForm = () => {
	const [loading, setLoading] = useState(false)
	const [showSuccessTag, setShowSuccessTag] = useState(false)
	const [showErrorTag, setShowErrorTag] = useState(false)

	const onFinish = async (values: Object) => {
		const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
		setLoading(true)
		setShowSuccessTag(false)
		setShowErrorTag(false)

		try {
			await sleep(3000) // TODO: implement
			setShowSuccessTag(true)
		} catch (e) {
			setShowErrorTag(true)
		} finally {
			setLoading(false)
		}
	}
	const onFinishFailed = (values: Object) => {
		console.log('on finish failed', values)
		setShowErrorTag(true)
	}

	const emailRules = [{ required: true, message: 'Email is required' }]
	const messageRules = [{ required: true, message: 'Give me something to read!' }]
	const nameRules = [{ required: true, message: 'Name is required' }]

	const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
	const timesIcon = <FontAwesomeIcon icon={faTimesCircle} />

	return (
		<Form className="contact-form" name="contact" initialValues={{ remember: true }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
			<Form.Item label="Name" name="Name" rules={nameRules}>
				<Input />
			</Form.Item>

			<Row gutter={24}>
				<Col xs={24} md={12}>
					<Form.Item label="Email" name="email" rules={emailRules}>
						<Input />
					</Form.Item>
				</Col>
				<Col xs={24} md={12}>
					<Form.Item label="Phone Number" name="phone">
						<Input />
					</Form.Item>
				</Col>
			</Row>

			<Form.Item label="Message" name="message" rules={messageRules}>
				<TextArea rows={4} />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" loading={loading}>
					Submit
				</Button>
				<Tag icon={checkIcon} color="success" visible={showSuccessTag}>
					Success
				</Tag>
				<Tag icon={timesIcon} color="error" visible={showErrorTag}>
					Error
				</Tag>
			</Form.Item>
		</Form>
	)
}

export default ContactForm
