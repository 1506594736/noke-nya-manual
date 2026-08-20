<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  Cable,
  CircleHelp,
  Download,
  LifeBuoy,
  Mail,
  PackageCheck,
  RefreshCw,
  Radio,
  Settings2,
  SlidersHorizontal,
  Users,
  Usb,
  Wrench,
} from 'lucide-vue-next'

const { lang } = useData()
const isEn = computed(() => lang.value === 'en-US')

const t = computed(() =>
  isEn.value
    ? {
        kicker: 'Neko Nya User Manual',
        titleLine1: 'Neko Nya',
        titleLine2: 'Slime Trackers',
        lead: 'From connecting and wearing to calibration and troubleshooting. Jump straight to the task you need — no need to read the whole manual.',
        primary: 'Get Started',
        secondary: 'Troubleshoot',
        facts: [
          { dt: 'Connection', dd: 'Dedicated wireless receiver' },
          { dt: 'PC connection', dd: 'USB' },
          { dt: 'Support group', dd: '1102960192' },
        ],
        sceneLabel: 'Connection path',
        receiver: 'Receiver',
        computer: 'PC USB',
        sceneNote: 'Attach the antenna, then connect to PC',
        startKicker: 'First-time use',
        startTitle: 'Set up in this order',
        startLink: 'Start first-time setup',
        startSteps: [
          { number: '01', title: 'Check contents', text: 'Get to know the trackers, receiver, antenna and charging dock.', href: '/en/info/product', icon: PackageCheck },
          { number: '02', title: 'Connect & power on', text: 'Attach the receiver antenna, connect to PC and power on the trackers.', href: '/en/guide/quick-start', icon: BatteryCharging },
          { number: '03', title: 'Assembly & wearing', text: 'Build the chest mount and straps, then wear the trackers.', href: '/en/guide/assembly', icon: SlidersHorizontal },
          { number: '04', title: 'Configure SlimeVR', text: 'Install the software, detect devices and assign body points.', href: '/en/software/', icon: Settings2 },
          { number: '05', title: 'VRChat setup', text: 'Complete tracking settings and in-game calibration before playing.', href: '/en/software/vrchat', icon: Radio },
          { number: '06', title: 'Continuous calibration', text: 'Complete continuous calibration before regular use.', href: '/en/device/continuous-calibration', icon: RefreshCw },
        ],
        workflowKicker: 'Find by symptom',
        workflowTitle: 'What are you experiencing?',
        taskEntries: [
          { title: 'Device not showing up', text: 'Check receiver, power, pairing and software state.', href: '/en/support/troubleshooting', icon: CircleHelp },
          { title: 'Drift or wrong orientation', text: 'Recheck wearing direction, assignment and calibration.', href: '/en/device/calibration', icon: RefreshCw },
          { title: 'Add or replace trackers', text: 'Clear old records and re-pair the wireless connection.', href: '/en/guide/add-tracker', icon: Wrench },
          { title: 'Update firmware', text: 'Check the version, enter DFU and flash the matching firmware.', href: '/en/device/firmware', icon: Download },
          { title: 'Full troubleshooting', text: 'Locate the issue step by step — tracker, hardware and software.', href: '/en/support/troubleshooting', icon: LifeBuoy },
          { title: 'FAQ', text: 'Purchasing, compatibility, usage and maintenance questions.', href: '/en/info/faq', icon: BookOpen },
        ],
        supportKicker: 'Still stuck?',
        supportTitle: 'When contacting support, describe the symptom and what you have already tried.',
        supportLinks: [
          { href: 'https://qm.qq.com/q/AFd83favza', small: 'QQ support group', value: '1102960192', icon: Users },
          { href: 'mailto:1506594736@qq.com', small: 'Support email', value: '1506594736@qq.com', icon: Mail },
          { href: '/en/support/downloads', small: 'Software & firmware', value: 'Downloads', icon: Download },
        ],
      }
    : {
        kicker: 'Neko Nya 中文使用说明',
        titleLine1: 'Neko Nya',
        titleLine2: 'Slime 追踪器',
        lead: '从连接、佩戴到校准与故障排查。按当前要完成的操作进入，不需要从头翻完整本说明书。',
        primary: '首次使用',
        secondary: '排查问题',
        facts: [
          { dt: '通信方式', dd: '专用无线接收器' },
          { dt: '电脑连接', dd: 'USB' },
          { dt: '售后群', dd: '1102960192' },
        ],
        sceneLabel: '连接路径',
        receiver: '接收器',
        computer: '电脑 USB',
        sceneNote: '安装天线后连接电脑',
        startKicker: '首次使用',
        startTitle: '按照这个顺序完成设置',
        startLink: '开始首次使用',
        startSteps: [
          { number: '01', title: '确认配件', text: '认识追踪器、接收器、天线与充电底座。', href: '/info/product', icon: PackageCheck },
          { number: '02', title: '连接与开机', text: '安装接收器天线，连接电脑并开启追踪器。', href: '/guide/quick-start', icon: BatteryCharging },
          { number: '03', title: '组装与佩戴', text: '组装胸挂与绑带，按推荐点位佩戴。', href: '/guide/assembly', icon: SlidersHorizontal },
          { number: '04', title: '配置 SlimeVR', text: '安装软件、识别设备并完成身体点位分配。', href: '/software/', icon: Settings2 },
          { number: '05', title: 'VRChat 配置', text: '进入游戏前完成追踪设置与游戏内校准。', href: '/software/vrchat', icon: Radio },
          { number: '06', title: '持续校准', text: '完成持续校准后再开始日常使用。', href: '/device/continuous-calibration', icon: RefreshCw },
        ],
        workflowKicker: '按现象查找',
        workflowTitle: '你现在遇到了什么？',
        taskEntries: [
          { title: '设备没有显示', text: '检查接收器、供电、配对和软件状态。', href: '/support/troubleshooting', icon: CircleHelp },
          { title: '追踪漂移或方向错误', text: '重新核对佩戴方向、点位分配和校准。', href: '/device/calibration', icon: RefreshCw },
          { title: '新增或更换追踪器', text: '清除旧记录并重新完成无线配对。', href: '/guide/add-tracker', icon: Wrench },
          { title: '升级固件', text: '查看版本、进入 DFU 并更新对应固件。', href: '/device/firmware', icon: Download },
          { title: '完整故障排查', text: '按追踪、硬件和软件现象逐项定位。', href: '/support/troubleshooting', icon: LifeBuoy },
          { title: '常见问题', text: '查看购买、兼容性、使用与维护问题。', href: '/info/faq', icon: BookOpen },
        ],
        supportKicker: '仍未解决？',
        supportTitle: '联系售后时，请同时说明故障现象和已尝试的步骤。',
        supportLinks: [
          { href: 'https://qm.qq.com/q/AFd83favza', small: 'QQ 售后群', value: '1102960192', icon: Users },
          { href: 'mailto:1506594736@qq.com', small: '售后邮箱', value: '1506594736@qq.com', icon: Mail },
          { href: '/support/downloads', small: '软件与固件', value: '下载中心', icon: Download },
        ],
      }
)
</script>

<template>
  <main class="manual-home">
    <section class="manual-intro">
      <div class="manual-intro__copy">
        <p class="manual-kicker">{{ t.kicker }}</p>
        <h1>{{ t.titleLine1 }}<br />{{ t.titleLine2 }}</h1>
        <p class="manual-lead">{{ t.lead }}</p>
        <div class="manual-actions">
          <a class="manual-button manual-button--primary" :href="isEn ? '/en/info/product' : '/info/product'">
            <BookOpen :size="19" />{{ t.primary }}<ArrowRight :size="18" />
          </a>
          <a class="manual-button manual-button--secondary" :href="isEn ? '/en/support/troubleshooting' : '/support/troubleshooting'">
            <LifeBuoy :size="19" />{{ t.secondary }}
          </a>
        </div>
        <dl class="manual-facts">
          <div v-for="f in t.facts" :key="f.dt"><dt>{{ f.dt }}</dt><dd>{{ f.dd }}</dd></div>
        </dl>
      </div>

      <div class="device-scene" role="img" :aria-label="t.sceneLabel">
        <div class="device-scene__label">{{ t.sceneLabel }}</div>
        <div class="tracker-cluster">
          <div class="tracker tracker--one"><span></span></div>
          <div class="tracker tracker--two"><span></span></div>
          <div class="tracker tracker--three"><span></span></div>
        </div>
        <div class="signal-path" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="receiver-unit"><Radio :size="28" /><span>{{ t.receiver }}</span></div>
        <div class="usb-path" aria-hidden="true"></div>
        <div class="computer-unit"><Usb :size="28" /><span>{{ t.computer }}</span></div>
        <div class="device-scene__note"><Cable :size="17" />{{ t.sceneNote }}</div>
      </div>
    </section>

    <section class="manual-start" aria-labelledby="start-title">
      <div class="section-heading section-heading--split">
        <div>
          <p>{{ t.startKicker }}</p>
          <h2 id="start-title">{{ t.startTitle }}</h2>
        </div>
        <a :href="isEn ? '/en/info/product' : '/info/product'">{{ t.startLink }}<ArrowRight :size="18" /></a>
      </div>
      <ol class="manual-step-list">
        <li v-for="step in t.startSteps" :key="step.number">
          <a :href="step.href">
            <span class="manual-step-number">{{ step.number }}</span>
            <component :is="step.icon" :size="22" aria-hidden="true" />
            <span class="manual-step-copy"><strong>{{ step.title }}</strong><small>{{ step.text }}</small></span>
            <ArrowRight :size="18" aria-hidden="true" />
          </a>
        </li>
      </ol>
    </section>

    <section class="manual-workflow" aria-labelledby="workflow-title">
      <div class="section-heading">
        <p>{{ t.workflowKicker }}</p>
        <h2 id="workflow-title">{{ t.workflowTitle }}</h2>
      </div>
      <div class="manual-entry-list">
        <a v-for="entry in t.taskEntries" :key="entry.title" class="manual-entry" :href="entry.href">
          <component :is="entry.icon" :size="22" aria-hidden="true" />
          <span><strong>{{ entry.title }}</strong><small>{{ entry.text }}</small></span>
          <ArrowRight :size="18" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section class="manual-support-band" aria-label="support">
      <div class="manual-support-intro">
        <p>{{ t.supportKicker }}</p>
        <h2>{{ t.supportTitle }}</h2>
      </div>
      <div class="manual-support-links">
        <a v-for="link in t.supportLinks" :key="link.value" :href="link.href" :target="link.href.startsWith('http') ? '_blank' : undefined" :rel="link.href.startsWith('http') ? 'noreferrer' : undefined">
          <component :is="link.icon" :size="20" /><span><small>{{ link.small }}</small>{{ link.value }}</span>
        </a>
      </div>
    </section>
  </main>
  <SupportFab />
</template>
