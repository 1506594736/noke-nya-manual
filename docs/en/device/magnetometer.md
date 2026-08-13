# Magnetometer

The magnetometer is an advanced or experimental feature and is not a required step for regular first-time use. Enabling the magnetometer can greatly extend the average drift time of the trackers, but it has certain requirements on the magnetic environment.

## Before Using

- First confirm whether your tracker model includes and supports a magnetometer.
- First complete normal device calibration and wearing calibration.
- Stay away from magnets, speakers, motors, large metal structures and other interference sources.

The original manual requires firmware dated 2026-06-04 or later. On older firmware, complete the [Firmware Update](/en/device/firmware) before continuing.

## Enabling Steps

1. Get the flashing configuration tool that matches your current firmware from the product support channel. Open it, click "refresh list" once, then select the receiver.
2. In "commands", select "enable magnetometer", send it, and wait about 3 seconds.
3. Then select "restart tracker", send it, and wait about 3 seconds.
4. Reopen SlimeVR and confirm the magnetometer state. If it still shows disabled, fully quit SlimeVR and start it again.
5. Turn off continuous calibration while using the magnetometer. After enabling it for the first time, turn around a few times in place so the device adapts to the current environment.

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/magnetometer/step-01.png" alt="Magnetometer test feature description" /><figcaption>Confirm the firmware and environment meet the requirements.</figcaption></figure>
  <figure><img src="/images/magnetometer/step-02.png" alt="Magnetometer flashing configuration tool" /><figcaption>Use the flashing configuration tool to manage the magnetometer.</figcaption></figure>
  <figure><img src="/images/magnetometer/step-04.png" alt="Selecting the receiver in the flashing configuration tool" /><figcaption>Refresh the list, then select the receiver.</figcaption></figure>
  <figure><img src="/images/magnetometer/step-05.png" alt="Enable magnetometer command in the flashing configuration tool" /><figcaption>Select "enable magnetometer" and send.</figcaption></figure>
  <figure><img src="/images/magnetometer/step-06.png" alt="Restart tracker command in the flashing configuration tool" /><figcaption>Then select "restart tracker".</figcaption></figure>
  <figure><img src="/images/magnetometer/step-07.png" alt="SlimeVR magnetometer state" /><figcaption>Restart SlimeVR and confirm the state.</figcaption></figure>
  <figure><img src="/images/magnetometer/step-08.png" alt="SlimeVR continuous calibration setting" /><figcaption>Turn off continuous calibration while the magnetometer is enabled.</figcaption></figure>
</div>

::: warning Do not replace troubleshooting with test features
Orientation errors or drift are not necessarily caused by the magnetometer. First check wearing direction, calibration flow and whether devices are loose.
:::
