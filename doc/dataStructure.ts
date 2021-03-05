export interface Ticket {
  id: number;
  guid: string;
  subject: string;
  relatedType: "contact" | "visitor" | "agent";
  contactOrVisitor?: Contact | Visitor;
  relatedId: number;
  lastMessage: Message;
  lastMessageId: number;
  lastMessageChannelId: string;
  lastMessageChannelAccountId: string;
  firstMessageId: number;
  firstMessageChannelId: string;
  firstMessageChannelAccountId: string;
  originalId: string;
  status: "new" | "pendingInternal" | "pendingExternal" | "onHold" | "resolved";
  priority: "urgent" | "high" | "normal" | "low";
  assignedAgent: AgentAssignee;
  assignedDepartment: DepartmentAssignee;
  lastStatusChangedAt: ISO8601TimeFormat;
  lastUpdatedAt: ISO8601TimeFormat;
  isEditable: boolean;
  isDeleted: boolean;
  isRead: boolean;
  isReadByContact: boolean;
  hasDraft: boolean;
  isActive: boolean;
  isMultiChannel: boolean;
  isHidden: boolean;
  createdById: number;
  createdByType: "agent" | "contact" | "system" | "visitor";
  createdAt: ISO8601TimeFormat;
  lastRepliedAt: ISO8601TimeFormat;
  lastRepliedById: number;
  lastRepliedByType: "agent" | "contact" | "system";
  tagIds: string[];
  customFields: {
    name: string;
    id: string;
    value: string;
  }[];
  mentionedAgents: {
    agentId: number;
    isRead: boolean;
    messageId: number;
  }[];
  slaPolicyId: string;
  firstRespondBreachAt: ISO8601TimeFormat;
  nextRespondBreachAt: ISO8601TimeFormat;
  resolveBreachAt: ISO8601TimeFormat;
  nextSLABreachAt: ISO8601TimeFormat;
  totalReplies: number;
  screenAvatar: string;
  screenName: string;
  screenValue: string;
  timeStamp: number;
}

export interface Agent {
  apikey: string;
  chats: number;
  email: string;
  id: number;
  isAdmin: boolean;
  name: string;
  status: string;
}

export interface AgentAssignee {
  id: number;
  name: string;
  type: "agent" | "bot";
  email?: string;
}

export interface DepartmentAssignee {
  id: string;
  name: string;
}

export interface Message {
  id: number;
  conversationId: number;
  channelId: string;
  type: "message" | "note";
  directType: "receive" | "send";
  channelAccountId: string;
  contactIdentityId: number;
  originalMessageId: string;
  originalMessageUrl: string;
  parentId: number;
  subject: string;
  cc: string;
  bcc: string;
  quote: string;
  contents: {
    id: number;
    type:
      | "text"
      | "htmlText"
      | "video"
      | "audio"
      | "picture"
      | "file"
      | "location"
      | "webView"
      | "quickReply";
    text: string;
    htmlText: string;
    name: string;
    url: string;
    previewUrl: string;
    mime: string;
    attachmentId: string;
    latitude: string;
    longitude: string;
    desc: string;
    title: string;
    fallbackUrl: string;
    webviewHeight: string;
    payload: string;
    orderNum: number;
  }[];
  mentionedAgentIds: number[];
  isRead: boolean;
  sendStatus: "success" | "sending" | "failed";
  sender?: Contact | Visitor | AgentAsSender;
  sentById: number;
  sentByBotId: string;
  sentByType: "contact" | "visitor" | "agent" | "system" | "bot";
  sentTime: ISO8601TimeFormat;
  receivedTime: ISO8601TimeFormat;
  contact: Contact;
  errorMessage: string;
  hasAttachmentButNotReceived: boolean;
}

export interface Contact {
  id: number;
  name: string;
  alias: string;
  contactIdentities?: {
    id: number;
    contactId: number;
    type: string;
    value: string;
    name: string;
    avatarURL: string;
    infoURL: string;
    identityIconUrl: string;
    originalContactPageUrl: string;
    screenName: string;
    orderNum: number;
    isDeleted: boolean;
  }[];
  description: string;
  company: string;
  title: string;
  phone: string;
  fax: string;
  mailingAddress: string;
  city: string;
  stateOrProvince: string;
  countryOrRegion: string;
  postalOrZipCode: string;
  createdTime: ISO8601TimeFormat;
  isDeleted: boolean;
  tags: string[];
}

export interface Visitor {
  contact: null;
  email: string;
  id: number;
  name: string;
}

export interface AgentAsSender {
  avatar: string;
  bio: string;
  dateTimeFormat: string; // MM/dd/yyyy HH:mm:ss
  displayName: string;
  email: string;
  firstName: string;
  groups: [];
  id: number;
  isActive: boolean;
  isAdmin: boolean;
  isLocked: boolean;
  lastName: string;
  mobilePhone: string;
  timeZone: string;
  title: string;
}

export interface ChangeEvent {
  data: {
    oldData: any;
    newData: any;
  };
}

type ISO8601TimeFormat = string; // 2020-10-26T08:20:03.443Z
