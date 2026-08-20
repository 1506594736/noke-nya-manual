# VRChat Setup

This page applies when playing VRChat through SteamVR direct connection or streaming. First complete device detection and tracker assignment in [SlimeVR Software](/en/software/).

## Before Entering VRChat for the First Time

::: tip This chapter
This chapter guides you through setting up the Slime trackers in VRChat for the first time.
:::

1. Start SlimeVR and confirm all trackers are connected and assigned correctly.
2. Put on the headset and trackers, start SteamVR, then enter VRChat.
3. In SlimeVR, open the "Settings - VRChat settings warning" page.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-01.png" alt="SlimeVR VRChat settings warning page" /><figcaption>Open the VRChat settings warning page.</figcaption></figure>
   </div>

4. Note the items marked with yellow exclamation points and adjust the corresponding VRChat settings (use the current software version as the reference).

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-02.png" alt="SlimeVR VRChat settings warning items" /><figcaption>Check the items indicated by the yellow prompts.</figcaption></figure>
   </div>

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-03.png" alt="Example VRChat settings prompts" /><figcaption>Follow the prompts of the current version.</figcaption></figure>
   </div>

## VRChat Tracking Settings

1. Open the VRChat panel and click Settings to enter the large menu.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-04.png" alt="VRChat opening the settings large menu" /><figcaption>Enter the settings large menu from the panel.</figcaption></figure>
   </div>

2. Go to "Settings - Large menu - Mirror" and enable the personal mirror during full-body calibration.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-05.png" alt="VRChat mirror settings" /><figcaption>Enable the personal mirror during full-body calibration.</figcaption></figure>
   </div>

   ::: tip Real height
   Fill in your real height for the VRChat avatar! The height inside SlimeVR does not need to match VRChat.
   :::

   ::: tip Switching avatars
   When switching to a different avatar, check whether the tracker nodes align with the model; if not, fine-tune the skeleton.
   :::

3. Enable "disable shoulder tracking and shoulder width compensation".

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-06.png" alt="VRChat disable shoulder tracking and shoulder width compensation settings" /><figcaption>Disable shoulder tracking and shoulder width compensation.</figcaption></figure>
   </div>

4. Enable full-body calibration visual feedback, set the tracker attachment range to 0.2 m, and set the tracker appearance to direction axis.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-07.png" alt="VRChat full-body calibration visual feedback settings" /><figcaption>Set visual feedback, attachment range and direction axis.</figcaption></figure>
   </div>

## First Use Preparation

### Gyroscope Calibration

::: tip Calibration frequency
Calibrate once after receiving the trackers; do not calibrate before every use.
:::

1. Insert all trackers into the charging dock, then double-press the SWO button. The trackers blink green once, stay solid green for 4–6 seconds, and finally blink green three times to indicate that gyroscope calibration is complete. Do not touch or move the trackers during calibration.

## Before Each Use

::: warning Before-use preparation
Complete the following preparation before each use of the trackers.
:::

::: warning Point-count recommendation
If you purchased an 8-point or 10-point set, start with 6 points first. Eight- and ten-point setups are more difficult to wear and tune; move to 8 or 10 points after the 6-point setup works correctly.
:::

Prepare in this order before each session:

1. Start SlimeVR, put on the headset and trackers, and enter VRChat.
2. Click "Drift reset - Full reset" and stay in the upright pose until the countdown ends; then click "Wearing - Body" and stay in the skiing pose until the countdown ends.

   ::: tip Not ideal after calibrating?
   If the tracker position or orientation is not ideal after calibration, you can repeat this step until you are satisfied.
   :::

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-08.png" alt="SlimeVR full reset and wearing calibration entry" /><figcaption>Run the full reset and body wearing calibration in order.</figcaption></figure>
   </div>

3. With 8 or more points and foot trackers assigned, also click "Wearing - Feet" and rise onto your toes until the countdown ends.

   ::: tip No foot trackers?
   If no trackers are assigned to the feet, you can skip this step.
   :::

4. After the steps above, open the VRChat menu as soon as possible, keep your legs straight and still, and click Calibrate.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-09.png" alt="Standing posture before VRChat full-body calibration" /><figcaption>Stay upright and stable before calibrating.</figcaption></figure>
   </div>

5. Keep your legs straight and extend your arms into a T-pose (only if you have arm trackers); keep the trackers (red circle positions) as close to the matching model parts as possible.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-10.png" alt="VRChat tracker and model alignment" /><figcaption>Keep the trackers as close to the model parts as possible.</figcaption></figure>
   </div>

6. Mainly adjust the five positions to match the avatar skeleton (depending on your tracker count); click the drop-down arrow on the right for more detailed options.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-11.png" alt="SlimeVR skeleton adjustment interface" /><figcaption>You can adjust the skeleton here for different models.</figcaption></figure>
   </div>

7. After adjusting, shrink the green circle so it aligns with the model, then press the controller trigger to confirm the binding.

::: tip Different avatars
Different avatars generally need the skeleton re-adjusted before binding; re-playing with the same avatar usually does not require adjustment.
:::

## When Movement Is Abnormal

- After re-wearing or restarting the app, prioritize re-running the full reset and body wearing calibration.
- For natural drift after long sessions, you can use "Full reset" or "Reset yaw" depending on the situation.
- If orientation is still wrong after movement, re-secure the straps first, then re-run the full reset and wearing calibration.
- If problems remain, see [Troubleshooting](/en/support/troubleshooting) and contact [support](/en/support/) with SlimeVR and VRChat screen recordings.
