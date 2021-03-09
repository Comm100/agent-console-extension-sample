# Get and set objects

## Agent

### Get current [agent](./dataStructure.ts#L59)

```typescript
const agent: Agent = Comm100AgentConsoleAPI.get("agentconsole.currentAgent");
```

## Ticket

### Get current [ticket](./dataStructure.ts#L1)

```typescript
const ticket: Ticket = Comm100AgentConsoleAPI.get(
  "agentconsole.ticketing.currentTicket"
);
```

### Get and set the `subject` of current ticket

```typescript
Comm100AgentConsoleAPI.get("agentconsole.ticketing.currentTicket.subject");
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.subject",
  value
);
```

### Get and set the [contact](./dataStructure.ts#L138) of current ticket

```javascript
const contact: Contact = Comm100AgentConsoleAPI.get(
  "agentconsole.ticketing.currentTicket.contact"
);
//Only the ID of the contact can be set
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.contact",
  value
);
//Example
Comm100AgentConsoleAPI.set("agentconsole.ticketing.currentTicket.contact", {
  id: 1,
});
```

### Get and set the [department assignee](./dataStructure.ts#L76) of current ticket

```javascript
const departmentAssignee: DepartmentAssignee = Comm100AgentConsoleAPI.get(
  "agentconsole.ticketing.currentTicket.departmentAssignee"
);
//Only the ID of the department can be set
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.departmentAssignee",
  value
);
//Example
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.departmentAssignee",
  { id: 1 }
);
```

### Get and set the [agent assignee](./dataStructure.ts#L69) of current ticket

```javascript
const agentAssignee: AgentAssignee = Comm100AgentConsoleAPI.get(
  "agentconsole.ticketing.currentTicket.agentAssignee"
);
//Only the ID of the agent can be set
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.agentAssignee",
  value
);
//Example
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.agentAssignee",
  {
    id: 1,
  }
);
```

### Get and set the `priority` of current ticket

```javascript
Comm100AgentConsoleAPI.get("agentconsole.ticketing.currentTicket.priority");
// Only one of urgent, high, normal, low can be set
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.priority",
  value
);
```

### Get and set the `status` of current ticket

```javascript
Comm100AgentConsoleAPI.get("agentconsole.ticketing.currentTicket.status");
// Only one of new, pendingInternal, pendingExternal, onHold, resolved can be set
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.status",
  value
);
```

### Get, add and remove the `tags` of current ticket

```javascript
Comm100AgentConsoleAPI.get("agentconsole.ticketing.currentTicket.tags");
Comm100AgentConsoleAPI.do(
  "agentconsole.ticketing.currentTicket.tags.add",
  value
);
Comm100AgentConsoleAPI.do(
  "agentconsole.ticketing.currentTicket.tags.remove",
  value
);
//Example
Comm100AgentConsoleAPI.do("agentconsole.ticketing.currentTicket.tags.add", {
  id: 1,
});
Comm100AgentConsoleAPI.do("agentconsole.ticketing.currentTicket.tags.remove", {
  id: 1,
});
```

### Get and set the `custom fields` of current ticket by field id

```javascript
Comm100AgentConsoleAPI.get(
  "agentconsole.ticketing.currentTicket.customFields:[field id]"
);
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.customFields:[field id]",
  value
);
//Example
Comm100AgentConsoleAPI.set(
  "agentconsole.ticketing.currentTicket.customFields:123",
  "test"
);
```

# Event

### Add event listener for ticket property change

```typescript
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.selectChanged",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.subject.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.contact.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.departmentAssignee.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.agentAssignee.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.priority.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.status.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.tags.changed",
  function (event: ChangeEvent) {}
);
Comm100AgentConsoleAPI.on(
  "agentconsole.currentTicket.customFields:[field id].changed",
  function (event: ChangeEvent) {}
);
```

see [ChangeEvent](./dataStructure.ts#L196) definition.

# Action

### Append text to the input box of current ticket

```javascript
Comm100AgentConsoleAPI.do(
  "agentconsole.ticketing.currentTicket.reply.append",
  value
);
Comm100AgentConsoleAPI.do(
  "agentconsole.ticketing.currentTicket.note.append",
  value
);
```
