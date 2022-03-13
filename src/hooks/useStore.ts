import { PageSection } from 'types';
import create from 'zustand';
import { combine } from 'zustand/middleware';

type InitialState = {
  currentPageId: Nullable<string>;
  pageSections: PageSection[];
  isSidebarOpen: boolean;
};

type SetState = {
  setCurrentPageId: (pageId: Nullable<string>) => void;
  setPageSections: (pageSections: PageSection[]) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const useStore = create(
  combine<InitialState, SetState>(
    {
      currentPageId: null,
      pageSections: [],
      isSidebarOpen: false,
    },
    (set) => ({
      setCurrentPageId: (currentPageId) => set(() => ({ currentPageId })),
      setPageSections: (pageSections) => set(() => ({ pageSections })),
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      closeSidebar: () => set(() => ({ isSidebarOpen: false })),
    })
  )
);
