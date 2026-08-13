# Firmware Update

Firmware updates are maintenance operations. When the devices are working normally, there is no need to update repeatedly just to chase version numbers.

## Before You Update

- Confirm the firmware is explicitly for your tracker or receiver model.
- Confirm the tracker and receiver firmware versions are compatible with each other.
- Ensure the computer and devices have a stable power supply.
- Close software that may occupy the device port.
- Only use firmware and tools confirmed by Neko Nya.

::: danger Do not interrupt the update
Do not unplug the device, close the tool, or let the computer sleep during the firmware write. Using the wrong firmware may make the device fail to start or fail to pair.
:::

## How to Check the Version

In the SlimeVR main window, click the tracker you want to check. The device info panel shows the current firmware version.

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/firmware/step-01.png" alt="SlimeVR tracker list and version entry" /><figcaption>Select the target device in the tracker list.</figcaption></figure>
  <figure><img src="/images/firmware/step-02.png" alt="SlimeVR tracker version number location" /><figcaption>The arrow points to the current version number.</figcaption></figure>
</div>

## Updating from a PC

1. Download the firmware and update tool for the matching model.
2. Connect the device to the computer.
3. Confirm the device model and current version in the tool.
4. Select the matching firmware and start the update.
5. Wait until the tool clearly shows completion.
6. Restart the device and check the version.
7. Confirm the tracker and receiver can still connect normally.

## DFU Update Flow

1. Quick-press the `RST` button 3 times. You can use the button on the charging dock; when operating a tracker directly, use a non-metallic thin object to gently press the reset hole.
2. After entering DFU mode, the tracker's red light blinks.
3. Place the tracker into the charging dock and connect it to the computer. The original manual notes that the four slots near the button on the dock support PC connection.
4. When a removable disk named `tk_boot` appears, copy the official firmware matching your model to that disk.
5. Wait for the write to finish, then restart the device and check the version and connection state.

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/firmware/step-03.png" alt="Dock slots that support PC connection" /><figcaption>The four slots near the button support PC connection.</figcaption></figure>
  <figure><img src="/images/firmware/step-04.png" alt="Windows showing the tk_boot firmware disk" /><figcaption>Example of the `tk_boot` disk in DFU mode.</figcaption></figure>
</div>

## Recovery After a Failed Update

If the device cannot be recognized, started or paired after an update, stop flashing repeatedly. Note down the device model, the firmware file used, tool messages and indicator-light state, then contact [support](/en/support/).

## Version History

| Version | Supported device | Release date | Main changes |
| --- | --- | --- | --- |
| TBD | TBD | TBD | To be migrated from the existing firmware materials |
