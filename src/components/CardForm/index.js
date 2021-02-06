import React, { useState, useCallback } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import UploadImage from "./UploadImage";
import MessageError from "./MessageError";
import Button from "components/_shared/Button";
import Loader from "components/_shared/Loader";
import CategoriesField from "./CategoriesField";

const URL_FORMAT = /^(ftp|http|https):\/\/[^ "]+$/;
const MAX_SIZE_IMAGE = 15 * 1024 * 1024; // 15mb

const CreateCardForm = ({ sendForm, loading, data }) => {
	const [photo, setPhoto] = useState(null);

	let defaultValues = {
		title: data.title,
		description: data.description,
		externalUrl: data.externalUrl,
	};

	const { register, handleSubmit, errors } = useForm({ defaultValues });

	const formatPhoto = (photo) => photo.split("base64,")[1];

	const isLargeImage = useCallback((sizeImg) => sizeImg > MAX_SIZE_IMAGE, []);

	const onSubmit = ({ title, description, externalUrl, category, image }) => {
		if (image.length && isLargeImage(image[0].size)) return;

		sendForm(
			JSON.stringify({
				title,
				description,
				photo: photo ? formatPhoto(photo) : undefined,
				externalUrl,
				categoryId: category,
			}),
		);
	};

	return (
		<form className="CreateCardForm" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
			<section className="input">
				<input
					name="title"
					placeholder="Título"
					ref={register({ required: true, maxLength: 50 })}
				/>
				{errors?.title?.type === "required" && (
					<MessageError message="Ingrese un Título" />
				)}
				{errors?.title?.type === "maxLength" && (
					<MessageError message="Máximo 50 caracteres" />
				)}
			</section>

			<section className="input">
				<textarea
					rows="5"
					name="description"
					placeholder="Descripción"
					ref={register({ required: true, minLength: 100 })}
				></textarea>
				{errors?.description?.type === "minLength" && (
					<MessageError message="Mínimo 50 caracteres" />
				)}
				{errors?.description?.type === "required" && (
					<MessageError message="Ingrese una descripción" />
				)}
			</section>

			<CategoriesField
				name="category"
				placeholder="Categorias"
				validationRef={register({ required: true })}
				defaultValue={data.category}
				error={errors?.category?.type}
			/>

			<section className="input">
				<input
					name="externalUrl"
					placeholder="URL"
					ref={register({ required: true, maxLength: 254, pattern: URL_FORMAT })}
				/>
				{errors?.externalUrl?.type === "required" && (
					<MessageError message="Ingrese una Url" />
				)}
				{errors?.externalUrl?.type === "maxLength" && (
					<MessageError message="Máximo 250 caracteres" />
				)}
				{errors?.externalUrl?.type === "pattern" && (
					<MessageError message="Ingrese una Url válida" />
				)}
			</section>

			<section className="form__bottom">
				<UploadImage
					photo={photo}
					name="image"
					changePhoto={data.photo}
					validateImage={register({ required: !data.photo })}
					setPhoto={setPhoto}
					isLargeImage={isLargeImage}
					error={errors?.image?.type}
				/>
				<Button type="submit">
					{loading ? <Loader /> : data ? "Editar artículo" : "Agregar artículo"}
				</Button>
			</section>
		</form>
	);
};

export default CreateCardForm;
