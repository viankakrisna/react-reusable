export const showFile = (key, value) =>
	value instanceof File
		? {
				lastModified: value.lastModified,
				lastModifiedDate: value.lastModifiedDate,
				name: value.name,
				size: value.size,
				type: value.type,
			}
		: value;

export const handleSubmit = formData =>
	new Promise(resolve => setTimeout(() => resolve(formData), 1500));
