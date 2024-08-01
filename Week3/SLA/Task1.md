### Task Details for SLA Creation in ServiceNow

**Task Objective:**
To create SLAs based on the provided priority levels, response times, resolution times, and schedules. Verify start and stop conditions with a 24x7 schedule initially and then adjust to the specified schedules. Ensure retroactive start and stop functionality is tested by changing the priority and observing SLA attachments.

**Instructions:**

1. **Identify SLAs to be Created:**
   - For each priority (P1 to P5), create two SLAs:
     - One for the response time.
     - One for the resolution time.

2. **SLAs Details:**
   - **Priority P1:**
     - Response: 15 Minutes
     - Resolution: 2 Hours
     - Schedule: 24x7
   - **Priority P2:**
     - Response: 1 Hour
     - Resolution: 8 Hours
     - Schedule: 8-5 weekdays excluding holidays
   - **Priority P3:**
     - Response: 2 Hours
     - Resolution: 24 Hours
     - Schedule: 8-5 weekdays excluding holidays
   - **Priority P4:**
     - Response: 4 Hours
     - Resolution: 48 Hours
     - Schedule: 8-5 weekdays excluding holidays
   - **Priority P5:**
     - Response: 8 Hours
     - Resolution: 72 Hours
     - Schedule: 8-5 weekdays excluding holidays

3. **Configure Each SLA:**
   - **Name**: Define a clear name for the SLA (e.g., "P1 Response SLA", "P1 Resolution SLA").
   - **Type**: Choose `Response` or `Resolution` based on the requirement.
   - **Duration**: Set the duration according to the provided times.
   - **Schedule**: Initially set to `24x7` for verification. Change to the specified schedule after verification.
   - **Condition**: Set start and stop conditions based on your SLA criteria.
   - **Retroactive Start**: Enable and configure if applicable.
   - **Stop Condition**: Configure the appropriate stop conditions.

5. **Verification Process:**
   - After configuring, check all start and stop conditions using the `24x7` schedule.
   - Once confirmed, change the schedule to the specified one (e.g., `8-5 weekdays excluding holidays`).

6. **Retroactive Start and Stop Testing:**
   - Change the priority of a ticket and observe how different SLAs get attached.
   - Ensure the SLAs attach correctly and meet the expected timelines and conditions.

**Notes:**
- The schedules are already present in the system.
- Carefully observe the retroactive start and stop conditions and ensure SLAs adjust as expected with priority changes.

### Example Configuration:

**P2 Response SLA:**
- **Name:** P2 Response SLA
- **Type:** Response
- **Duration:** 1 Hour
- **Schedule:** Initially set to 24x7, then change to 8-5 weekdays excluding holidays
- **Start Condition:** Define as per your start criteria
- **Stop Condition:** Define as per your stop criteria
- **Retroactive Start:** Enable if applicable

**P2 Resolution SLA:**
- **Name:** P2 Resolution SLA
- **Type:** Resolution
- **Duration:** 8 Hours
- **Schedule:** Initially set to 24x7, then change to 8-5 weekdays excluding holidays
- **Start Condition:** Define as per your start criteria
- **Stop Condition:** Define as per your stop criteria
- **Retroactive Start:** Enable if applicable

Repeat this process for each priority level and corresponding response and resolution SLAs.

If you need further assistance with specific configurations or have additional questions, feel free to ask!