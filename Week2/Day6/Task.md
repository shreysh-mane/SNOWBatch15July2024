### Task Requirements for Project Management in ServiceNow

**Objective:** Create a Project Management application with tables and modules to manage project and task details.

#### 1. Create `Project Details` Table

**Table Name:** `Project Details`

**Fields to Add:**
1. **Number**
   - Type: `String`
   - Note: Auto-generated
2. **Project Name**
   - Type: `String`
3. **Project Manager**
   - Type: `Reference`
   - Reference Table: `sys_user`
4. **Short Description**
   - Type: `String`
5. **Description**
   - Type: `String`
6. **Start Date**
   - Type: `Date`
7. **End Date**
   - Type: `Date`
8. **Project Status**
   - Type: `Choice List`
   - Options:
     - `None`
     - `Not Started`
     - `In Progress`
     - `Complete`
9. **Active**
   - Type: `Checkbox`

#### 2. Create `Task Details` Table
Extend 'Task' table to create this table.

**Table Name:** `Task Details`

**Fields to Add:**
1. **Number**
   - Type: `String`
   - Note: Auto-generated
2. **Task Name**
   - Type: `String`
   - Mandatory: `Yes`
3. **Project**
   - Type: `Reference`
   - Reference Table: `Project Details`
4. **Active**
   - Type: `Checkbox`
5. **Short Description**
   - Type: `String`
6. **Description**
   - Type: `String`
7. **Task State**
   - Type: `Choice List`
   - Options:
     - `None`
     - `In Progress`
     - `On Hold`
     - `Completed`
8. **Task Assigned**
   - Type: `Reference`
   - Reference Table: `sys_user`
   - Mandatory: `Yes`
9. **Actual Start**
   - Type: `Date`
   - Mandatory: `Yes`
10. **Expected End**
    - Type: `Date`
11. **Actual End**
    - Type: `Date`

#### 3. Create Project Management Application

**Application Name:** `Project Management`

**Modules to Include:**

1. **Projects**
   - Function: Displays a list of records from the `Project Details` table.
   - Table: `Project Details`
   - View: List

2. **Create Project**
   - Function: Opens the form view for creating a new record in the `Project Details` table.
   - Table: `Project Details`
   - View: Form

3. **Tasks**
   - Function: Displays a list of records from the `Task Details` table.
   - Table: `Task Details`
   - View: List

4. **Create Task**
   - Function: Opens the form view for creating a new record in the `Task Details` table.
   - Table: `Task Details`
   - View: Form

### Summary of Task

1. **Create `Project Details` Table** with specified fields.
2. **Create `Task Details` Table** with specified fields.
3. **Create `Project Management` Application**.
4. **Add Modules** to the `Project Management` application:
   - **Projects:** List view of `Project Details` table.
   - **Create Project:** Form view for `Project Details` table.
   - **Tasks:** List view of `Task Details` table.
   - **Create Task:** Form view for `Task Details` table.


(Your Form view should look like images added in this same folder for From view of ProjectDetails and TaskDetails Table).
