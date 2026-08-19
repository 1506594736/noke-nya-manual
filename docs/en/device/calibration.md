# Device Calibration

Calibration falls into two types: gyroscope zero-bias calibration is normally only done after first use, after firmware maintenance, or when something is clearly wrong; full reset and wearing calibration should be done after each re-wearing and after restarting the app.

## Gyroscope Zero-Bias Calibration

1. Wear the trackers for about 20 minutes before calibrating to reduce errors caused by temperature changes.
2. Keep the trackers on, place all devices into the charging dock as soon as possible, and put the dock on a stable, level surface.
3. Double-press the `SW0` button on the dock to enter calibration mode; you can also double-press the side button on each tracker.
4. Keep the time from removing the trackers to finishing calibration within about 1 minute. Do not touch or move the trackers during calibration.
5. Calibration is complete when the indicator blinks, stays on for about 6 seconds, then blinks 3-4 times.

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/calibration/step-01.png" alt="SW0 and RST button locations on the charging dock" /><figcaption>Double-press the SW0 button on the dock to start calibration.</figcaption></figure>
  <figure><img src="/images/calibration/step-02.png" alt="SlimeVR calibration entry for each use" /><figcaption>Start from the calibration entry before each use.</figcaption></figure>
</div>

## Before Each Use

The before-each-use routine (full reset, body wearing calibration, feet calibration) and the in-game calibration are described in [VRChat Setup](/en/software/vrchat) under "Before Each Session".

## Continuous Calibration (VRChat)

Continuous calibration is set up while wearing VR and inside VRChat. Save the standing, sitting, and lying or reclined poses in order; each step follows the interface countdown and confirmation result.

<div class="manual-image-grid manual-image-grid--three">
  <figure><img src="/images/calibration/step-06.png" alt="SlimeVR continuous calibration configuration entry" /><figcaption>Open settings and configure continuous calibration.</figcaption></figure>
  <figure><img src="/images/calibration/step-07.png" alt="SlimeVR tracker already on" /><figcaption>Confirm the trackers are on.</figcaption></figure>
  <figure><img src="/images/calibration/step-08.png" alt="SlimeVR continuous calibration full reset" /><figcaption>Stand straight and complete the full reset.</figcaption></figure>
  <figure><img src="/images/calibration/step-09.png" alt="SlimeVR continuous calibration skiing pose" /><figcaption>Strike the skiing pose, then reset wearing.</figcaption></figure>
  <figure><img src="/images/calibration/step-10.png" alt="SlimeVR saving the standing pose" /><figcaption>Stand relaxed and save the pose.</figcaption></figure>
  <figure><img src="/images/calibration/step-11.png" alt="SlimeVR saving the sitting pose" /><figcaption>Sit or squat against a wall and save the pose.</figcaption></figure>
  <figure><img src="/images/calibration/step-12.png" alt="SlimeVR saving the lying pose" /><figcaption>Lie down or recline and save the pose.</figcaption></figure>
  <figure><img src="/images/calibration/step-13.png" alt="SlimeVR continuous calibration complete" /><figcaption>Click finish after all poses are saved.</figcaption></figure>
  <figure><img src="/images/calibration/step-14.png" alt="SlimeVR reset function description" /><figcaption>Full reset, heading axis and wearing calibration notes.</figcaption></figure>
</div>

## Still Offset After Calibration

First check whether a device has become loose or shifted during movement, then re-run the full reset and wearing calibration. Do not try to replace calibration by changing several software parameters at once; if it still cannot be resolved, see [Troubleshooting](/en/support/troubleshooting).
