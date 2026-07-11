import { Schema, model, models, Types } from "mongoose";

const ApiKeySchema = new Schema({
	keyHash: {
		type: String,
		required: true,
		unique: true,
	},
});

export interface IApiKey {
	_id: Types.ObjectId;
	userId: Types.ObjectId;
	keyHash: string;
	createdAt: Date;
	updatedAt: Date;
}

export default models.ApiKey || model<IApiKey>("ApiKey", ApiKeySchema);
