const {
	REACT_APP_CONTACT_ADDRESS,
	REACT_APP_CONTACT_EMAIL,
	REACT_APP_CONTACT_WEBSITE,
	REACT_APP_SOCIAL_INSTAGRAM,
	REACT_APP_SOCIAL_LINKEDIN,
	REACT_APP_SOCIAL_TWITTER,
} = process.env

const getContactInformation = () => ({
	address: REACT_APP_CONTACT_ADDRESS,
	email: REACT_APP_CONTACT_EMAIL,
	website: REACT_APP_CONTACT_WEBSITE,
})

const getSocialMediaInformation = () => ({
	instagramUrl: REACT_APP_SOCIAL_INSTAGRAM,
	linkedInUrl: REACT_APP_SOCIAL_LINKEDIN,
	twitterUrl: REACT_APP_SOCIAL_TWITTER,
})

export {
	getContactInformation,
	getSocialMediaInformation
}