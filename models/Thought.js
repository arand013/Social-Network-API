const { Schema, model, Types } = require('mongoose');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: 'Please Enter Your Reaction!',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Please Enter a name',
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)


const Thought = model('Thought', ThoughtSchema)

module.exports = Thought