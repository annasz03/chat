import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        console.log("Sender ID:", senderId);
        console.log("Receiver ID:", receiverId);

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,  // Helyes mezőnév használata
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        console.log("Message saved and response sent");
        res.status(201).json(newMessage);

    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "internal server error" });
    }
};


export const getMessages= async (req, res) => {
    try {
        const {id:userToChat} = req.params;
        const senderId = req.user._id;
        const conversation =await Conversation.findOne({
            participants:{$all: [senderId, userToChat]},
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Internal server error"});
    }
}