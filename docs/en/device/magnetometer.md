# Magnetometer

The magnetometer is an advanced or experimental feature and is not a required step for regular first-time use. Enabling the magnetometer can greatly extend the average drift time of the trackers, but it has certain requirements on the magnetic environment.

## Before Using

::: warning Environment requirements
The magnetometer is sensitive to its environment. If the surrounding magnetic field is unsuitable, enabling it may reduce tracking quality instead.
:::

::: warning Firmware requirement
Use firmware dated 2026-06-04 or later. On older firmware, complete the [Firmware Update](/en/device/firmware) first.
:::

When the magnetic environment is suitable, enabling the magnetometer can greatly improve tracker stability. Before using it, confirm that your tracker model supports a magnetometer, complete normal device and wearing calibration, and stay away from magnets, speakers, motors and large metal structures.

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/magnetometer/step-01.png" alt="Magnetometer test feature description" /><figcaption>The magnetometer is disabled by default.</figcaption></figure>
  <figure><img src="/images/magnetometer/step-02.png" alt="Magnetometer flashing configuration tool" /><figcaption>Use the flashing configuration tool to enable the magnetometer.</figcaption></figure>
</div>

## Enabling Steps

1. Get the flashing configuration tool that matches your current firmware from the support QQ group [1102960192](https://qm.qq.com/q/AFd83favza) or the [Download Center](/en/support/downloads). Open it, click “refresh list” once, then select the receiver.

   <div class="manual-image-grid manual-image-grid--two">
     <figure><img src="/images/magnetometer/step-03.png" alt="Obtaining the magnetometer flashing configuration tool" /><figcaption>Get the firmware flashing configuration tool from the group files.</figcaption></figure>
     <figure><img src="/images/magnetometer/step-04.png" alt="Selecting the receiver in the flashing configuration tool" /><figcaption>Refresh the list, then select the receiver.</figcaption></figure>
   </div>

2. In “commands”, select “enable magnetometer”, send it, and wait about 3 seconds.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-05.png" alt="Enable magnetometer command in the flashing configuration tool" /><figcaption>Select “enable magnetometer” and send.</figcaption></figure>
   </div>

3. Then select “restart tracker”, send it, and wait about 3 seconds.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-06.png" alt="Restart tracker command in the flashing configuration tool" /><figcaption>Then select “restart tracker”.</figcaption></figure>
   </div>

4. Reopen SlimeVR and confirm the magnetometer state. If it still shows disabled, fully quit SlimeVR and start it again.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-07.png" alt="SlimeVR magnetometer state" /><figcaption>Restart SlimeVR and confirm the state.</figcaption></figure>
   </div>

5. Turn off continuous calibration while using the magnetometer. After enabling it for the first time, turn around a few times in place so the device adapts to the current environment.

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-08.png" alt="SlimeVR continuous calibration setting" /><figcaption>Turn off continuous calibration while the magnetometer is enabled.</figcaption></figure>
   </div>

::: warning Do not replace troubleshooting with test features
Orientation errors or drift are not necessarily caused by the magnetometer. First check wearing direction, calibration flow and whether devices are loose.
:::
