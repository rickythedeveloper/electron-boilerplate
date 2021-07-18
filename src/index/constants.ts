export enum MessageType {
	someAsyncMessage = "someAsyncMessage",
	someAsyncReply = "someAsyncReply",
	someSyncMessage = "someSyncMessage",
}

export type MessageTypeString = keyof typeof MessageType;
