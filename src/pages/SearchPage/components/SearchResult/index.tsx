import HighlightText from "@/components/ui/HighlightText";
import { SearchResultItem } from "@/types";

interface IProps {
  items: SearchResultItem[];
  total: number;
  page: number;
  pageSize: number;
}

function SearchResult(props: IProps) {
  const { items, total, page, pageSize } = props;

  const firstItemIndex = (page - 1) * pageSize + 1;
  const lastItemIndex = firstItemIndex - 1 + items.length;

  return (
    <>
      {items ? (
        <div className="w-4/5">
          <div className="font-semibold my-10">
            Showing {firstItemIndex} - {lastItemIndex} of {total} results
          </div>

          <div className="flex flex-col gap-12">
            {items &&
              items.map((searchItem) => (
                <div
                  className="flex flex-col gap-3"
                  key={searchItem.DocumentId}
                >
                  <a
                    className="text-primary-blue font-semibold text-[22px] hover:underline"
                    href={searchItem.DocumentURI}
                  >
                    <HighlightText
                      text={searchItem.DocumentTitle.Text}
                      highlights={searchItem.DocumentTitle.Highlights}
                    />
                  </a>
                  <div className="text-base font-normal">
                    <HighlightText
                      text={searchItem.DocumentExcerpt.Text}
                      highlights={searchItem.DocumentExcerpt.Highlights}
                    />
                  </div>
                  <a
                    className="text-sm font-normal text-[#686868] break-all"
                    href={searchItem.DocumentURI}
                  >
                    {searchItem.DocumentURI}
                  </a>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default SearchResult;
