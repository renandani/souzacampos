import { PagesType } from '@/@types/pages'
import { verifyTypePage } from '@/utils/verifyTypePage'
import { Dropdown } from 'flowbite-react'
import Link from 'next/link'

type DropdownMenuProps = {
  page: PagesType
  isSub?: boolean
}

export function MenuDropdown({ page, isSub = false }: DropdownMenuProps) {
  return (
    <Dropdown
      key={page.id}
      placement={isSub ? 'right' : 'bottom'}
      inline
      label={page.title}
    >
      {page.children.map((subPage) => {
        const pageLink = verifyTypePage(subPage)

        if (subPage.children.length > 0) {
          return <MenuDropdown key={subPage.id} page={subPage} isSub />
        } else {
          return (
            <Dropdown.Item key={subPage.id}>
              <Link href={pageLink}>{subPage.title}</Link>
            </Dropdown.Item>
          )
        }
      })}
    </Dropdown>
  )
}
