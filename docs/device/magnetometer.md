# 磁力计

磁力计属于高级或实验性功能，不建议作为普通用户首次使用的必经步骤。开启磁力计可以大幅延长追踪器的平均漂移时间，但对磁场环境有一定要求。

## 使用前

::: warning 环境要求
磁力计对环境要求较高。如果周围磁场环境不合适，开启磁力计可能反而降低追踪效果。
:::

::: warning 固件要求
需要使用 2026 年 6 月 4 日或之后的固件；旧固件请先完成[固件更新](/device/firmware)。
:::

磁场环境良好时，开启磁力计可以大幅增加追踪器稳定性。使用前请确认当前追踪器型号支持磁力计，完成常规设备校准和佩戴校准，并远离磁铁、扬声器、电机、大型金属结构等干扰源。

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/magnetometer/step-01.png" alt="磁力计测试功能说明" /><figcaption>默认情况下磁力计处于禁用状态。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-02.png" alt="磁力计刷写配置工具" /><figcaption>需要使用固件刷写配置工具开启磁力计。</figcaption></figure>
</div>

## 启用步骤

1. 从售后 QQ 群 [1102960192](https://qm.qq.com/q/AFd83favza) 或[下载中心](/support/downloads)获取与当前固件匹配的刷写配置工具，打开后点击一次“刷新列表”，再选择接收器。

   <div class="manual-image-grid manual-image-grid--two">
     <figure><img src="/images/magnetometer/step-03.png" alt="获取磁力计刷写配置工具" /><figcaption>从群文件获取固件刷写配置工具。</figcaption></figure>
     <figure><img src="/images/magnetometer/step-04.png" alt="刷写配置工具选择接收器" /><figcaption>刷新列表后选择接收器。</figcaption></figure>
   </div>

2. 在“命令”中选择“启用磁力计”，点击发送并等待约 3 秒。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-05.png" alt="刷写配置工具启用磁力计命令" /><figcaption>选择“启用磁力计”并发送。</figcaption></figure>
   </div>

3. 再选择“重启追踪器”，点击发送并等待约 3 秒。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-06.png" alt="刷写配置工具重启追踪器命令" /><figcaption>随后选择“重启追踪器”。</figcaption></figure>
   </div>

4. 重新打开 SlimeVR 确认磁力计状态。若仍显示禁用，彻底退出 SlimeVR 后再次启动。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-07.png" alt="SlimeVR 磁力计状态" /><figcaption>重启 SlimeVR 后确认状态。</figcaption></figure>
   </div>

5. 使用磁力计时关闭持续校准；初次启用后原地转身几圈，让设备适应当前环境。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/magnetometer/step-08.png" alt="SlimeVR 持续校准设置" /><figcaption>磁力计启用时关闭持续校准。</figcaption></figure>
   </div>

::: warning 不要用测试功能替代故障排查
方向异常或漂移不一定由磁力计导致。优先检查佩戴方向、校准流程和设备是否松动。
:::
