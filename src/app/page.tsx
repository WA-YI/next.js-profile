import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { CardIcon } from '@/components/link-card-icon';
import { CardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import {
  FaBirthdayCake,
  FaWeixin,
  FaBuilding,
  FaLocationArrow,
  FaSteam,
  FaXbox,
  FaTiktok,
} from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';
import { AiOutlineBilibili } from "react-icons/ai";

import MyAvatar from '../../public/icons/avatar.jpg';

export default function Home() {
  return (
    <main className='container space-y-6 py-6 lg:my-10'>
      <FadeUpStagger>
        <div className='flex h-16 items-center justify-end'>
          <ThemeToggle />
        </div>
        <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
          <FadeUpDiv className='col-span-12 row-span-3 space-y-5 md:space-y-7 lg:col-span-4 lg:space-y-8'>
            <Image
              className='pointer-events-none w-[150px] rounded-full shadow-xl lg:w-[200px]'
              src={MyAvatar}
              alt="wayi's avatar"
            />
            <section>
              <h1 className='text-3xl font-black lg:text-4xl'>娃伊</h1>
              <h2 className='text-lg text-muted-foreground lg:text-xl'>
                恭喜你发现了这个人。
              </h2>
            </section>
            <div className='grid gap-1'>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <FaBirthdayCake />
                <p>金牛座</p>
              </div>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <FaLocationArrow />
                <p>北京 / 朝阳</p>
              </div>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <FaBuilding />
                <p>互联网牛马</p>
              </div>
            </div>
          </FadeUpDiv>
          <FadeUpCard
            className='col-span-12 flex justify-between p-6 transition-colors hover:border-wechat md:col-span-6 lg:col-span-4'>
            <div className='grid gap-3'>
              <CardIcon className='bg-wechat'>
                <FaWeixin size={25} />
              </CardIcon>
              <CardName name='微信' id='@wayi-kitsune' />
            </div>
            <div className='grid gap-3'>
              <Image width={64} height={64} src='/icons/wechat.jpg' alt='微信二维码' />
            </div>
          </FadeUpCard>
          <LinkCard
            className='col-span-6 grid gap-3 p-6 transition-colors hover:border-rednote md:col-span-3 lg:col-span-2'
            href='https://www.xiaohongshu.com/user/profile/5ef61b38000000000101f48f'
          >
            <CardIcon className='bg-rednote'>
              <SiXiaohongshu size={25} />
            </CardIcon>
            <CardName name='小红书' id='@wayisama' />
          </LinkCard>
          <LinkCard
            className='col-span-6 grid gap-3 p-6 transition-colors hover:border-douyin dark:hover:border-gray-100 md:col-span-3 lg:col-span-2'
            href='https://www.douyin.com/user/MS4wLjABAAAAxGWzpALGKOKWiJNVqggpUX7tywAB9LYh3-jRdOMhYzg'
          >
            <CardIcon className='bg-douyin dark:bg-douyinDark'>
              <FaTiktok size={25} className="dark:text-black" />
            </CardIcon>
            <CardName name='抖音' id='@wayisama' />
          </LinkCard>
          <FadeUpCard className='col-span-6 grid gap-3 p-6 transition-colors hover:border-xbox md:col-span-3 lg:col-span-2'>
            <CardIcon className='bg-xbox'>
              <FaXbox size={25} />
            </CardIcon>
            <CardName name='Xbox' id='WAYISAMA' />
          </FadeUpCard>
          <LinkCard
            className='col-span-6 grid gap-3 p-6 transition-colors hover:border-steam md:col-span-3 lg:col-span-2'
            href='https://steamcommunity.com/id/wayisama/'
          >
            <CardIcon className='bg-steam'>
              <FaSteam size={25} />
            </CardIcon>
            <CardName name='Steam' id='WAYI' />
          </LinkCard>
          <LinkCard
            className='col-span-12 grid gap-3 p-6 transition-colors hover:border-bilibili md:col-span-6 lg:col-span-4'
            href='https://space.bilibili.com/7399884'
          >
            <CardIcon className='bg-bilibili'>
              <AiOutlineBilibili size={25} />
            </CardIcon>
            <CardName name='哔哩哔哩' id='@娃伊xs' />
          </LinkCard>
        </div>
      </FadeUpStagger>
    </main>
  );
}
